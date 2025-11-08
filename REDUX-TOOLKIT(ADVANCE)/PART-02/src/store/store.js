import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/counterSlice";
import photoReducer from "../utils/photoSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        photos: photoReducer,
    },
    //devTools:false,
})

export default store