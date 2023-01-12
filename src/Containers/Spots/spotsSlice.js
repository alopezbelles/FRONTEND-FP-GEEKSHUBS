
import { createSlice } from "@reduxjs/toolkit";

export const spotsSlice = createSlice({
    name: "spot",
    initialState: {
      details: {},
      query: "",
      search: [],
      loans: [],
      byDirector: [],
    },
    reducers: {
      addPlace: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      },
      addSearch: (state, action) => {
        return {
          ...state,
          search: action.payload,
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


  export default spotsSlice.reducer;
  export const { addPlace, addSearch, addCriteria } = spotsSlice.actions;
