import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  }
})

export default store