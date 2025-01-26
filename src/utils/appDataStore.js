import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appDataStore = configureStore({
  reducer: {
    user: userReducer,
  }, 
})

export default appDataStore;