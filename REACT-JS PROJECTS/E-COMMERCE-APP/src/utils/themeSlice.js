import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        }
    },
    setDarkMode: (state, action) => {
        state.darkMode = action.payload;
    }

})

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;