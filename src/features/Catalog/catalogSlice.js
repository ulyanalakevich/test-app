import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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
        id: nanoid(), 
        isFavorite: false,
      }));
    },
    fetchNationsError: (state) => {
      state.status = "error";
    },
    toggleFavorite: (state, action) => {
        const { id } = action.payload;
        const nation = state.nations.find((nation) => nation.id === id);
        if (nation) {
          nation.isFavorite = !nation.isFavorite;
        }
  },
}
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
