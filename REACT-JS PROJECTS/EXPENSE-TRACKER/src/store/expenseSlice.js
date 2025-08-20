import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage initially
const initialExpense = JSON.parse(localStorage.getItem("expense")) || [];

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expenses: initialExpense,
    },
    reducers: {
        addExpense: (state, action) => {
            const newExpense = {
                id: Date.now(), // unique ID
                title: action.payload.title,
                amount: action.payload.amount,
                category: action.payload.category,
            }
            state.expenses.push(newExpense);
            localStorage.setItem("expenses", JSON.stringify(state.expenses));

        },
        resetExpense: (state) => {
            state.expenses = [];
            localStorage.setItem("expenses", JSON.stringify([]));
        },
    },
});

// Selector to calculate total expense
export const selectTotalExpense = (state) => {
    return state.expense.expenses.reduce((total, expense) => total + expense.amount, 0);
}

export const { addExpense, resetExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
