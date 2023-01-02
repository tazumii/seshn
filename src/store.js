import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  }
})

export default store