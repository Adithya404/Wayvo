import db from '@/lib/db';

export default async function handler(req,res){
    if(req.method === 'POST'){
        const email =req.body.user_email;
        if(!email){
            return res
            .status(404)
            .json({message:"user not found"});
        }
        else{
            try{
                const [rows] =await db.query('SELECT * FROM todos WHERE user_email=?',[email]);
                if(rows.length ==0){
                    return res
                    .status(400)
                    .json({message:"No tasks found for the user",user_tasks:[]});
                }
                return res
                .status(200)
                .json({message:"Data fetched", user_tasks:rows});
                
            }
            catch(err){
                console.log("Error Occurred: ",err);
                return res
                .status(500)
                .json({message:"internal server error"}); 
            }
        }
    }
    else{
        return res
        .status(400)
        .json({message:"Method not supported"});
    }
}