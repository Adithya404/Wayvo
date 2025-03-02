import { useRouter } from 'next/router';
import {useState,useEffect} from 'react';

export default function Login(){
    const router=useRouter();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [resposeMessage,setResponseMessage] = useState();


    useEffect(()=>{
        async function check(){
            try{
                const res=await fetch("/api/protected");
            const data= await res.json();
            if(res.status ==200){
                console.log(data.message);
                router.push('/dashboard');
            }
            else{
                console.log("Not authorized user, Please log in");
                router.push("/login");
            }
            }
            catch(err){
                console.log("An error Occured",err);
            }
        }
        check();
    },[]);
    async function submitHandler(event){
        event.preventDefault();
        const loginData={email:email, password:password}
        const response=await fetch('/api/login',{
            method: 'POST',
            headers : {'Content-Type': 'Application/json'},
            body: JSON.stringify(loginData)
        }
        );
        const data=await response.json();
        setResponseMessage(data.message);
        if(response.status==200&& data.token){
            router.push("/dashboard");
        }
        else{
            console.log("Login Failed: ", data.message);
        }
    }
    return(<>
    <form onSubmit={submitHandler}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" required/>
    </form>
    {resposeMessage && (<p>{resposeMessage}</p>)}
    
    </>);
}