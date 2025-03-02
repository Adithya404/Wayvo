import bcrypt from 'bcryptjs';
import db from '@/lib/db'

export default async function handler(req,res){
    if(req.method ==='POST'){
        const {fullname,email,mobile,password} = req.body;
        if(!fullname || !email || !mobile || !password){
            return res
            .status(400)
            .json({message:"Fields can't be empty."});
        }
        else{
           try{
               const [rows] = await db.query('SELECT * FROM users WHERE email = ?',[email]);
               if(rows.length != 0){
                   return res
                   .status(404)
                   .json({message:"User already exists"});
               }
               const hashedPassword =await  bcrypt.hash(password,10);
               const [result] = await db.execute(
                "insert into users (fullname,email,mobile,password) values (?,?,?,?)",
                [fullname, email, mobile, hashedPassword]
              );
               console.log("Inserted ID:", result.insertId);
               console.log("Rows affected:", result.affectedRows);
               return res
               .status(201)
               .json({message:"User Signup successful"});
           }
           catch(err){
            console.log("Signup error: ",err);
            return res
            .status(500)
            .json({message:"Internal Server error"});
           }               
        }

    }
    else{
        return res
        .status(405)
        .json({message:"Invalid method"});
    }
}