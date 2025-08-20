import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import incomeReducer from "./incomeSlice";
import expenseReducer from "./expenseSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        income: incomeReducer,
        expense: expenseReducer,
    },
})

export default store;