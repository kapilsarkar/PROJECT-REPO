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
                .addCase(addUser.pending, (state) => {
                    state.status = "loading";
                    state.error = null;

                })
                .addCase(addUser.fulfilled, (state) => {
                    state.status = "succeeded";
                    state.name = "";
                    state.email = "";
                })
                .addCase(addUser.rejected, (state, action) => {
                    state.state = "failed";
                    state.error = action.error.message;
                })

        },
    }
});

export const { updateName, updateEmail } = userSlice.actions;
export default userSlice.reducer;