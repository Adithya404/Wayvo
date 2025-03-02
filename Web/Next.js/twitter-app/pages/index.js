import { useState,useEffect, use} from "react";
import { useRouter } from "next/router";
import first from "./../styles/login.module.css"
export var un="";

export  default function Home() {

  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [data,setData] = useState([]);
  const [error,setError] = useState(false);
  const router = useRouter();
  

  useEffect(()=>{
    async function fetchUsers(){
      const response=await fetch("https://dummyjson.com/users");
      const data=await response.json();
      setData(data.users);
      
    }
    fetchUsers();
    
  },[]);

  function handleLogin(){
    const user = data.find(
      item => item.username ==username && item.password ==password
    );
    // console.log(user);
    if(user){
      console.log("valid user");
      un=username;
      setError(false);
      router.push('/Blogstore');
    }
    else{
      setError(true);
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div className={first.main}>
      <h1>Enter your details</h1>
      <input className={first.cred} type="text" placeholder="Username" onChange={(event)=>{
        setUsername(event.target.value);
        setError(false);
      }}  required/>
      <br/>
      <input className={first.cred} type="password" placeholder="Password" onChange={(event)=>{
        setPassword(event.target.value);
        setError(false);
      }} required/>
      <br/>
      <input className={first.btn} type="button" value="Login" onClick={handleLogin}  />
      {error && <p className={first.error}>Invalid username or password</p>}
    </div>
  );
}