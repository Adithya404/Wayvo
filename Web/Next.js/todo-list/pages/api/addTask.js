import db from '@/lib/db';

export default async function handler(req,res){
    if(req.method === 'POST'){
        const {task,user_email} = req.body;
        console.log(user_email);
        if(!task){
            return res
            .status(400)
            .json({message:"Task can't be empty"});
        }
        if(!user_email){
            return res
            .status(400)
            .json({message:"Email can't be empty"});
        }
        try{
            
            const [newTask] = await db.execute('INSERT INTO todos(task,user_email) VALUES(?,?)',[task,user_email]);
            console.log("Inserted id:",newTask.insertId);
            console.log("Affected rows:",newTask.affectedRows);
            return res
            .status(201)
            .json({message:"Task added successfully."});
        }
        catch(err){
            console.log("Error while adding the task: ",err);
            return res
            .status(500)
            .json({message:"Internal server error."})
        }
    }
    else{
        return res
        .status(400)
        .json({message:'Method not supported'});
    }
}