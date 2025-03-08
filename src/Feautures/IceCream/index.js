import {produce} from 'immer';
import { createSlice } from '@reduxjs/toolkit';
import { CAKE_ORDERED } from '../Cake';
import { cakeOrder } from '../Cake';
// const ICE_ORDERED='ICE_ORDERED';
// const ICE_RESTORED='ICE_RESTORED';

const initialState={
    numberOfIceCream:10
}

const iceCreamReducer=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        iceCreamOrder:(state,action)=>{
            state.numberOfIceCream-=action.payload
        },
        iceCreamRestocked:(state,action)=>{
            state.numberOfIceCream+=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrder,state=>{
            state.numberOfIceCream--;
        })
    }
})

// export function IceCreamOrdered(payload){
//     return {
//         type:ICE_ORDERED,
//         payload
//     }
// }

// export function IceCreamRestored(payload){
//     return {
//         type:ICE_RESTORED,
//         payload
//     }
// }

// export const iceCreamReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ICE_ORDERED:
//             return{
//                 ...state,
//                 numberOfIceCream:state.numberOfIceCream-action.payload
//             }
//         case ICE_RESTORED:
//             return{
//                 ...state,
//                 numberOfIceCream:state.numberOfIceCream+action.payload
//             }
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 numberOfIceCream:state.numberOfIceCream-action.payload
//             }
        
//         default:
//             return state
//     }
// }

export default iceCreamReducer.reducer;
export const {iceCreamOrder,iceCreamRestocked}=iceCreamReducer.actions;
