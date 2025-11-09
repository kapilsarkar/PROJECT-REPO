import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("users/addUser", async (userData) => {

    const response = await axios.post("http://localhost:3000/users", userData);
    return response.data;

})

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        status: "idle",
        error: null,
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;

        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        extraReducers: (builder) => {
            builder
            .addCase(addUser.pending,(state,action)=>{
                state.status="loading";
            })
            .addCase(addUser.fulfilled,(state,action)=>{
        }

    }
})