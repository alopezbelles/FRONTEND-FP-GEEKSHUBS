import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
   credentials: {},
   
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loggedIn: true
      };
    },
    
  }
});

export const { login } = userSlice.actions;



export const userData = (state) => state.user;

export default userSlice.reducer;