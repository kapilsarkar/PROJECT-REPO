import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/counterSlice";
import photoReducer from "../utils/photoSlice";
import { apiSlice } from "../utils/apiSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        photos: photoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    //devTools:false,
})

export default store