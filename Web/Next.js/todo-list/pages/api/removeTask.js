import db from "@/lib/db";

export default async function handler(req,res){
    if(req.method !== 'DELETE'){
        return res
        .status(400)
        .json({message:'Invalid method'});
    }
    try{
        const id = req.body;
        console.log(id);
        
        await db.query('DELETE FROM todos WHERE id=? ;',[id]);
        return res
        .status(200)
        .json({message:'Task deleted successfully'});
    }
    catch(err){
        console.log("Error Occurred: ",err);
        return res
        .status(500)
        .json({message:'Internal Server error'});
    }
}