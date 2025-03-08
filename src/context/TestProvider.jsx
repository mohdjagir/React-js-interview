import { createContext, useReducer, useState } from "react";

const initialState={
    count:0
}
const TestReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count:state.count+1
            }
        case 'DECREMENT':
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state;

    }
}

export const TestContext = createContext();

const TestProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [state,dispatch]=useReducer(TestReducer,initialState)
    return (
        <TestContext.Provider value={{ state,dispatch }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestProvider;