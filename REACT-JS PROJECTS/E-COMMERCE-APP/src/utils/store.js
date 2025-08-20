import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
    },
},
)

export default store;