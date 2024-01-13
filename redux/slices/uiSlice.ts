import { IUIState } from "@/typing";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUIState = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      localStorage.setItem("nucleus_dark_mode", JSON.stringify(action.payload));
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
