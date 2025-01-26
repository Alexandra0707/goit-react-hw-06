import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { findContact } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
