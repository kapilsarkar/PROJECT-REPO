import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 2
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        // addByAmount: (state, action) => {
        //     state.counter += action.payload;
        // },
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
