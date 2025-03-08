import { createContext, useState } from "react";

export const UserLoginContext=createContext();

const UserLoginProvider=({children})=>{
    const [login,setLogin]=useState(false);

    const userLoginFunc=(value)=>{
        setLogin(value)
    }

    return(
        <UserLoginContext.Provider value={{login,userLoginFunc}}>
            {children}
        </UserLoginContext.Provider>
    )
}

export default UserLoginProvider;