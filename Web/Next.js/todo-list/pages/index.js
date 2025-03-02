import React,{useEffect,useState} from "react";
import Link from "next/link";

export default function Home() {
  const [msg,setMsg]=useState();

  useEffect(()=>{
    async function greet(){
      const response=await fetch('api/hello');
      const data=await response.json();
      setMsg(data.name)
    }
    greet();

  },[])

  return (
    <>
      <h1>hello {msg}</h1>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </>
  );
}
