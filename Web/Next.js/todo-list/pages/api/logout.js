import { serialize } from "cookie";

export default function handler(req,res){
    const cookieOption=serialize("authToken","",{
                        httpOnly:true,
                        secure: process.env.NODE_ENV ==="production",
                        sameSite: "strict",
                        path:'/',
                        maxAge:0,
                    });
                    res.setHeader("Set-Cookie", cookieOption);
                    return res
                    .status(200)
                    .json({message:"Logout Successful"});
}