import { createSlice } from "@reduxjs/toolkit";

const kidsModeSlice = createSlice({
  name: 'movies',
  initialState: {
    isKidsMode: false
  },
  reducers: {
    setKidsMode: (state, action) => {
      state.isKidsMode = action.payload;
    },
  }
})

export const { setKidsMode } = kidsModeSlice.actions;

export default kidsModeSlice.reducer;