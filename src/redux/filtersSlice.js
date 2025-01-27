import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { findContact } = filtersSlice.actions;
export const selectFilterName = (state) => state.filter.name;
