import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";
import usersReducer from "./slices/UsersSlice";

export default configureStore({
  reducer: {
    countReducer: countReducer,
    usersReducer: usersReducer,
  },
});
