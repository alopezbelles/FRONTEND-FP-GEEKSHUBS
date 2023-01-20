
import { createSlice } from "@reduxjs/toolkit";

export const spotsSlice = createSlice({
    name: "spot",
    initialState: {
      details: {},
      query: "",
      search: [],
      
    },
    reducers: {
      addPlace: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      },
      
      addCriteria: (state, action) => {
        return {
          ...state,
          query: action.payload,
        };
      },
      
    },
  });

  export const userData = (state) => state.user;
  export const placeData = (state) => state.spot;
  export default spotsSlice.reducer;
  export const { addPlace, addCriteria } = spotsSlice.actions;
