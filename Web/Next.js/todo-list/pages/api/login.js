import db from '@/lib/db'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

export default async function handler(req,res){
    if(req.method=='POST'){
        const {email,password}=req.body;
        if(!email || !password){
            return res
            .status(404)
            .json({message:"Email or passowrd can't be empyty"});
        }
        else{
            try{
                // console.log("Entered try block");
                const [rows]=await db.query('SELECT * FROM users where email=?',[email]);
                if(rows.length==0){
                    console.log("User not found in database");
                    return res.status(404).json({message:"User not found"});
                }
                const user=rows[0];
                const hashedpassword=user.password;
                const isValid=bcrypt.compare(password,hashedpassword);

                if(!isValid){
                    return res.status(400).json({message:"Password is invalid."})
                }
                const token=jwt.sign(
                    {id:user.id,email:user.email},
                    process.env.JWT_SECRET,
                    {expiresIn:"1h"}
                );
                const cookieOption=serialize("authToken",token,{
                    httpOnly:true,
                    secure: process.env.NODE_ENV ==="production",
                    sameSite: "strict",
                    path:'/',
                    maxAge:3600,
                });
                res.setHeader("Set-Cookie", cookieOption);
                return res
                .status(200)
                .json({message:"Login Successful", token:token});
            }
            catch(err){
                console.log("Database Failure", err);
                return res.status(500).json({message:"Internal Server Error"});
            }
        }
    }
    else{
        return res.status(404).json({message:"Method not supported."})
    }
}