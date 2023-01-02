import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isSignout: false,
    userToken: true,
  },
  reducers: {
    restoreToken: (state, action) => {
      state.userToken === action.token;
      state.isLoading === false;
    },
    signIn: (state, action) => {
      state.isSignout === false;
      state.userToken === action.token;
    },
    signOut: (state) => {
      state.isSignout === true;
      state.userToken === null;
    },
  },
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
