import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../utils/counterSlice"
const store = configureStore({
    reducer:{
       counter:counterReducer,
    },
    //devTools:false,
})

export default store