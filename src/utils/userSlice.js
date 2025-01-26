import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    leaveUser: (state, action) => {
      return null;
    }
  }
})

export const { createUser, leaveUser } = userSlice.actions;

export default userSlice.reducer;