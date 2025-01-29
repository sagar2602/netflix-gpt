import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import movieSoundReducer from "./movieSoundSlice";

const appDataStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: movieReducer,
    trailerSound: movieSoundReducer
  }, 
})

export default appDataStore;