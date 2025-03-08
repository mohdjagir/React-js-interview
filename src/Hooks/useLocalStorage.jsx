import React, { useEffect, useState } from "react";

const useLocalStorage=(key,defaultValue)=>{
    const [name,setName]=useState(localStorage.getItem(key)?localStorage.getItem(key):defaultValue);

    useEffect(()=>{
        localStorage.setItem(key,name)
    },[name,key])

    return [name,setName];
}

export default useLocalStorage;