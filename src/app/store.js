
import { configureStore } from "@reduxjs/toolkit";
import spotsSlice from "../Containers/Spots/spotsSlice";
import userSlice from "../Containers/Spots/userSlice";

export default configureStore({
  reducer: {
    spot: spotsSlice,
    user: userSlice,
  },
});