import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0,
    amount: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = Number(action.payload);
        },
        increment: (state) => {
            state.count = state.count + state.amount;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count = state.count - state.amount;

            }
        },
        reset: (state) => {
            state.count = 0;
            state.amount = 0;
        },
    }
})

export const { increment, decrement, reset, setAmount } = counterSlice.actions;
export default counterSlice.reducer;