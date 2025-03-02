import third from "./../../styles/card.module.css";
import Image from "next/image";
import {un} from "./../index";

export async function getStaticPaths(){
    const response=await fetch("https://dummyjson.com/posts");
    let data= await response.json();
    data=data.posts;
    const paths=data.map((item)=>{
        return {params: {id:item.id.toString()}}
    })
    // console.log(paths);
    return{
        paths,
        fallback: false,
    }
  }

export async function getStaticProps({params}){
    const res=await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data=await res.json();
    return {props: {data}}
}

export default function Post({data}){
    return <div className={third.main}>
        <div className={third.card} >
            <div className={third.box0}><p>@{un}</p>
            <hr className={third.line}/>
            </div>
            
        <div className={third.box1}>
            
            <h3>{data.title}</h3>
            <hr className={third.line}/>
            </div>

        <div className={third.box2}>
            <p>{data.body}</p>
            <hr className={third.line}/>
            </div>

        <div className={third.box3}>
        <div className={third.b3child}>❤️:{data.reactions.likes}
        </div>
        <div className={third.b3child}>
            <p style={{fontWeight:"bold"}}>Tags:</p>
            <ul className={third.taglist} style={{listStyleType: "none"}}>
                {data.tags.map((item)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </div>
        </div>
    </div>
}