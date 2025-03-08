import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState={
    loading:false,
    data:[],
    error:''
}

//call the api
export const fetUser=createAsyncThunk('user/fetchUser',async()=>{
  return axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>res.data);
});

const userReducer=createSlice({
    name:'user',
    initialState,
    reducers:{
    
    },
    extraReducers:(builder)=>{
        builder.addCase(fetUser.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetUser.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        })
        builder.addCase(fetUser.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
})

export default userReducer.reducer;