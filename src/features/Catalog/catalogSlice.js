import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "universities",
  initialState: {
    universities: [],
    status: "loading",
  },
  reducers: {
    fetchUniversities: (state, action) => {
      state.universities = action.payload;
    },
    fetchUniversitiesSuccess: (state, action) => {
        state.status = "success";
        state.universities = action.payload.map((university) => ({
          ...university,
          isFavorite: false, 
        }));
    },
    fetchUniversitiesError: (state) => {
      state.status = "error";
    },
    toggleFavorite: (state, action) => {
        const index = action.payload;
        state.universities[index].isFavorite = !state.universities[index].isFavorite;
    }
}});

export const selectUniversitiesState = (state) => state.universities;
export const selectUniversities = (state) =>
  selectUniversitiesState(state).universities;
export const {
  fetchUniversities,
  fetchUniversitiesSuccess,
  fetchUniversitiesError,
  toggleFavorite
} = catalogSlice.actions;

export default catalogSlice.reducer;
