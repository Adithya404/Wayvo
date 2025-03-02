import {useState} from "react";
import { useRouter } from "next/router";

export default function Signup(){
    const [fname,setFname] = useState();
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();
    const [password,setPassword] = useState();
    const [resposeMessage,setResponseMessage] = useState();
    const [countdown,setCountdown] = useState(null);
    const router=useRouter();
    const validatePassword=(password)=>{
        return(
            password.length >=8 && /[A-Z]/.test(password) &&/\d/.test(password)
        );
    }
    const validateMobile=(mobile)=>{
        return(
            /^\d{10}$/.test(mobile)
        );
    }
    async function submitHandler(event){
        event.preventDefault();

        if(!validatePassword(password)){
            setResponseMessage("Password must be atleast 8 chararcters long, include atleast an uppercase and a number");
            return;
        }
        if(!validateMobile(mobile)){
            setResponseMessage("Enter a valid 10digit number.");
            return;
        }
        const signupData={
            fullname:fname,
            email:email,
            mobile:mobile,
            password:password,
        };
        const response=await fetch('/api/signup',{
            method:'POST',
            headers:{'Content-Type': 'Application/json'},
            body:JSON.stringify(signupData),
        });
        const data= await response.json();
        setResponseMessage(data.message);
        if(response.status===201){
            setFname("");
            setEmail("");
            setMobile("");
            setPassword("");
            setCountdown(3);
            const interval = setInterval(()=>{
                setCountdown((prev)=>prev-1);
            },1000);
            setTimeout(()=>{
                clearInterval(interval);
                router.push('/login');
            },3000)
        }

    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Full Name" onChange={(e)=>setFname(e.target.value)} required/>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="number" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} required/>
            <input type="passowrd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
            <input type="submit"/>
        </form>
        {countdown !==null && (
            <p>redirecting to login page in {countdown}</p>
        )}
        {resposeMessage && (<p>{resposeMessage}</p>)}
        </>
    );
}