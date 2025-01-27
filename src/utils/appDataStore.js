import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";

const appDataStore = configureStore({
  reducer: {
    user: userReducer,
    moviesList: movieReducer
  }, 
})

export default appDataStore;