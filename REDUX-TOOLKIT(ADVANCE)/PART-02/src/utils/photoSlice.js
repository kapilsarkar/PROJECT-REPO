import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
    const res = await fetch("https://dummyjson.com/carts");
    return await res.json();
})

export const photoSlice = createSlice({
    name: "photos",
    initialState: {
        photos: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.photos = action.payload;
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },

});

export default photoSlice.reducer;