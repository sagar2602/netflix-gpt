import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import movieSoundReducer from "./movieSoundSlice";
import kidsModeReducer from "./kidsModeSlice";

const appDataStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: movieReducer,
    trailerSound: movieSoundReducer,
    kidsMode: kidsModeReducer,
  }, 
})

export default appDataStore;