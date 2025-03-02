import jwt from "jsonwebtoken";

export function verifyToken(req,res){
    const token=req.cookies.authToken;
    if(!token){
        return res
        .status(401)
        .json({message:"Unauthorized User, Please login"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        return true;
    }
    catch(err){
        return res
        .status(401)
        .json({message:"Invalid Token, please login again"});
    }
}