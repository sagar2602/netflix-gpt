import { createSlice } from "@reduxjs/toolkit"

const movieSoundSlice = createSlice({
  name: 'sound',
  initialState: {
    muted: false
  },
  reducers: {
    isMuted: (state, action) => {
      state.muted = !state.muted;
    }
  }
})

export const { isMuted } = movieSoundSlice.actions;
export default movieSoundSlice.reducer;