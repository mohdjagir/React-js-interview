import React, { useContext,useReducer } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { UserLoginContext } from "../context/UserLoginProvider";

const ContextExample = ({ }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { login, userLoginFunc } = useContext(UserLoginContext);
    return (
        <div>
            <p>theme:{theme}</p>
            <p>User Login:{login?"True":"False"}</p>
            <button onClick={()=>toggleTheme('dark')}>Toogle Theme</button>
            <button onClick={userLoginFunc}>Login</button>
           
        </div>
    )
}

export default ContextExample;