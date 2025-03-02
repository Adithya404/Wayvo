import React from "react";
import { useState } from "react";
import Card from "./Card";


function Search(){
    const [name, setName] = useState();
    const [search,setSearch]=useState();
    function onInputChange(event){
        // console.log(event.target.value);
        setName(event.target.value);
        // console.log(name);
    }
    
    function handleSearch(event){
        event.preventDefault();
        setSearch(name);
        setName("");
        console.log(search);
    }



    return(
        <>
        <div className="search-form">
        <form>
            <br/>
            <input type="text" onChange={onInputChange} placeholder="Enter the name of the artist"/>
            <br/>
            <input type="button" onClick={(event)=>handleSearch(event)} value="Search"/>
        </form>
        </div>
        {search && <Card item={search}/>}
        </>

    );
}

export default Search;