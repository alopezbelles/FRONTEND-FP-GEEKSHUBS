
import { configureStore } from "@reduxjs/toolkit";
import spotsSlice from "../Containers/Spots/spotsSlice";

export default configureStore({
  reducer: {
    spot: spotsSlice
  },
});