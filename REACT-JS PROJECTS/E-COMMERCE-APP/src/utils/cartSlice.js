import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const itemExists = state.items.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.items.push(action.payload);
            }

        },
        removeItems: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = [];
        },
    }
})

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;