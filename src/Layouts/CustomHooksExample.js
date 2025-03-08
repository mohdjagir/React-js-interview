import React from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const CustomHooksExample=({})=>{
    const [name,setName]=useLocalStorage('userName','');
    const [id,setId]=useLocalStorage('Id','');
    return(
        <>
            <input onChange={(e)=>setName(e.target.value)} value={name}/>
            <h1>Hello, {name}</h1>
            <input onChange={(e)=>setId(e.target.value)} value={id}/>
            <h1>Hello, {id}</h1>
        </>
    )
}

export default CustomHooksExample;