import db from "@/lib/db";

export default async function handler(req,res){
    if(req.method !=='POST'){
        return res
        .status(400)
        .json({message:"Method is not supported"});
    }
    const {id,task}=req.body;
    try{
        const [rows]=await db.query('UPDATE todos SET task =? WHERE id= ?',[task,id]);
        console.log("Affected rows: ",rows.affectedRows);
        return res
        .status(201)
        .json({message:'Successfully updated the task'});
    }
    catch(err){
        console.log("Unable to update the task");
        return res
        .status(500)
        .json({message:'Internal Server Error'});
    }
}