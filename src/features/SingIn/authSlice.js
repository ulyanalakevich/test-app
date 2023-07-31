import { createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./authApi";

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

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const token = await loginAPI(username, password);
    dispatch(loginSuccess({ token, username, password }));
  } catch (error) {
    dispatch(loginFailure(error.toString()));
  }
};

export default authSlice.reducer;