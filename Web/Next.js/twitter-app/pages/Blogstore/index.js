import React,{ useState,useEffect } from "react";
import { useRouter } from "next/router";
import second from "./../../styles/twtpage.module.css";
import {un} from "./../index"

export default function Blogstore(){

    const [posts,setPosts]= useState([]);
    const router=useRouter();

    useEffect(()=>{
        async function fetchposts(){
            const response= await fetch("https://dummyjson.com/posts");
            let data=await response.json();
            // console.log([data.posts]);
            console.log(un);
            setPosts(data.posts);  
        }
        fetchposts();
    },[]);
    return(
    <div className={second.main}>
        <h1>Hi, {un}</h1>
        <h2>Your recent posts..</h2>
        <div className={second.post_container}>
            {posts.map((item)=>{
                return(
        // eslint-disable-next-line react/jsx-key
        <div className={second.tweet} onClick={()=>router.push(`/Blogstore/${item.id}`)}>
            <p>{item.title}</p>
            </div>
        );
    })}
    </div>
    </div>);
}