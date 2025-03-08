import {produce} from 'immer';
import { createSlice } from '@reduxjs/toolkit';
// export const CAKE_ORDERED='CAKE_ORDERED';
// export const CAKE_RESTORED='CAKE_RESTORED';

const initialState={
    numberOfCake:10
}

const cakeReducer=createSlice({
    name:'cake',
    initialState,
    reducers:{
        cakeOrder:(state,action)=>{
            state.numberOfCake-=action.payload
        },
        cakeRestored:(state,action)=>{
            state.numberOfCake+=action.payload
        }
    }
})

// export function cakeOrdered(payload){
//     return {
//         type:CAKE_ORDERED,
//         payload
//     }
// }

// export function cakeRestored(payload){
//     return {
//         type:CAKE_RESTORED,
//         payload
//     }
// }

// export const cakeReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 numberOfCake:state.numberOfCake-action.payload
//             }
//         case CAKE_RESTORED:
//             return{
//                 ...state,
//                 numberOfCake:state.numberOfCake+action.payload
//             }
//         default:
//             return state
//     }
// }

export default cakeReducer.reducer;
export const {cakeOrder,cakeRestored}=cakeReducer.actions;