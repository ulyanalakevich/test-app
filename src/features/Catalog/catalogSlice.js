import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "nations",
  initialState: {
    nations: [],
    status: "loading",
  },
  reducers: {
    fetchNations: (state, action) => {
      state.nations = action.payload;
    },
    fetchNationsSuccess: (state, action) => {
      state.status = "success";
      state.nations = action.payload.map((nation) => ({
        ...nation,
        isFavorite: false,
      }));
    },
    fetchNationsError: (state) => {
      state.status = "error";
    },
    toggleFavorite: (state, action) => {
      const index = action.payload;
      state.nations[index].isFavorite = !state.nations[index].isFavorite;
    },
  },
});

export const selectNationsState = (state) => state.nations;
export const selectNations = (state) => selectNationsState(state).nations;
export const {
  fetchNations,
  fetchNationsSuccess,
  fetchNationsError,
  toggleFavorite,
} = catalogSlice.actions;

export default catalogSlice.reducer;
