import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    trendingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: null,
    hoveredMovieId: null
  },
  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieDetailsById: (state, action) => {
      state.movieDetails = action.payload;
    },
    setHoveredMovieId: (state, action) => {
      state.hoveredMovieId = action.payload;
    }
  }
})

export const { addTrendingMovies, addMovieTrailer, addPopularMovies, addTopMovies, addUpcomingMovies, addMovieDetailsById, setHoveredMovieId } = moviesSlice.actions;

export default moviesSlice.reducer;