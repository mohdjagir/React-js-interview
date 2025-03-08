
import React, { } from "react";
import { useSelector,useDispatch } from "react-redux";
import { cakeOrder,cakeRestored } from "../Feautures/Cake";
export const Cake = ({ }) => {
    const numberOfCake= useSelector((state)=>state.cake.numberOfCake);
    const dispatch= useDispatch();
    return (
        <div style={{ alignSelf: 'center' }}>
            <p>number of cakes:{numberOfCake} </p>
            <button onClick={()=>dispatch(cakeOrder(1))}>ordered</button>
            <button onClick={()=>dispatch(cakeRestored(1))}>restored</button>
        </div>
    )
}