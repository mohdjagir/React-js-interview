import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetUser } from "../Feautures/user/userSlice";
export const User=({})=>{
    const userList= useSelector((state)=>state.user)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetUser());
    },[])
    console.log(userList)
    return (
        <div>
            <p>user list</p>
        </div>
    )
}