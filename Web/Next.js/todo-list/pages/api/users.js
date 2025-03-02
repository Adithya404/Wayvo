import {query} from '../database/db';

export default async function handler(req,res){
    if (req.method ==='GET'){
        const users=await query('SELECT * FROM users (username,email) VALUES (?,?)',[username,email]);
        res.json(users);
    }
    else if(req.method ==='POST'){
        const {username,email} = req.body;
        const result =await query('INSERT INTO users (username,email) VALUES (?,?)',[username,email]);
        res.json({id:result.insertId, username,email});
    }
}