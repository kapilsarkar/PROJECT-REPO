import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import authReducer from "../slices/authSlice";
import  userReducer  from "../slices/users/userSlice";
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
        users:userReducer,

    },
});