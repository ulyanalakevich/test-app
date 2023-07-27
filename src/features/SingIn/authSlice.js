import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.status = "loading"
    },
    loginSuccess: (state, action) => {
      state.status = "success";
      state.token = action.payload;
    },
    loginFailure: (state) => {
      state.status = "error";
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;