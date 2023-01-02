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
      state.userToken = action.token;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      const payload = action.payload;
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          state.isSignout = false;
          state.userToken = "a";
        })
        .catch((error) => {});
    },
    signOut: (state) => {
      state.isSignout = true;
      state.userToken = null;
    },
  },
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
