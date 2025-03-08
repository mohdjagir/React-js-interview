import React, { useContext } from "react";
import { TestContext } from "../context/TestProvider";
import CustomHooksExample from "./CustomHooksExample";


const ContextExample2 = ({ }) => {
    const { state, dispatch } = useContext(TestContext);
    return (
        <div>
            <p>context example {state?.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            <CustomHooksExample />
        </div>
    )
}

export default ContextExample2;