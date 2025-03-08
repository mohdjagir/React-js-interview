import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../Feautures/Cake/index';
import iceCreamReducer from '../Feautures/IceCream/index';
import userReducer from '../Feautures/user/userSlice';
let toolkitStore=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    }
})
export default toolkitStore;