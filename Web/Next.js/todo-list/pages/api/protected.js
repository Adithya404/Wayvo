import {verifyToken} from '@/middleware/auth';

export default function handler(req,res){
    if(req.method !== 'GET'){
        return res
        .status(405)
        .json({message:"Invalid method"});
    }
    if(!verifyToken(req,res)){
        return ;
    }
    return res
    .status(200)
    .json({message:"Protected Data Access Granted",
        user:req.user
    });
}