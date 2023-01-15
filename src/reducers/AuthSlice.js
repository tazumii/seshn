import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isSignout: false,
    userToken: null,
  },
  reducers: {
    restoreToken: (state, action) => {
      state.userToken = action.payload.token;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      state.isSignout = false;
      state.userToken = action.payload.token;
    },
    signOut: (state) => {
      state.isSignout = true;
      state.userToken = null;
    },
  },
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
