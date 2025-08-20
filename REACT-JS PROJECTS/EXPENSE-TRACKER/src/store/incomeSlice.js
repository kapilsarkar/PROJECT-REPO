import { createSlice } from "@reduxjs/toolkit";


const incomeSlice = createSlice({
    name: "income",
    initialState: {
        income: JSON.parse(localStorage.getItem("income")) || 0,
    },
    reducers: {
        addIncome: (state, action) => {
            state.income = state.income + action.payload;
            localStorage.setItem("income", JSON.stringify(state.income));
        },
        resetIncome: (state) => {
            state.income = 0;
            localStorage.setItem("income", JSON.stringify(0));
        },
    },
});

export const selectIncome = (state) => state.income.income;

export const { addIncome, resetIncome } = incomeSlice.actions;
export default incomeSlice.reducer;