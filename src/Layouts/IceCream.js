import React, { use } from "react"
import { useSelector, useDispatch } from "react-redux";
import { iceCreamOrder,iceCreamRestocked } from "../Feautures/IceCream";
import actions from "../Redux/actions";
export const IceCream = ({ }) => {
    const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
    const dispatch= useDispatch();
    console.log(numberOfIceCream)
    const OrderCake=()=>{
        dispatch(iceCreamOrder(2))
    }
    return (
        <div>
            <p>number of iceCream: {numberOfIceCream}</p>
            <button onClick={OrderCake}>ordered</button>
            <button onClick={()=>dispatch(iceCreamRestocked(5))}>restored</button>
        </div>
    )
}