
import { configureStore } from "@reduxjs/toolkit";
import spotSlice from "../containers/Spots/spotsSlice";

export default configureStore({
  reducer: {
    spot: spotSlice
  },
});