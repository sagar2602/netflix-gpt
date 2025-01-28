import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    trendingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    }
  }
})

export const { addTrendingMovies, addMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;