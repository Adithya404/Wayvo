import mysql from 'mysql2/promise';

export async function query(sql,values=[]){
    const db=await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'qwerty',
        database:'todo_db',
    });
}

cosnt [results] =await db.execute(sql,values);
return results;