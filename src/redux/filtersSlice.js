import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { findContact } = slice.actions;
export const selectFilterName = (state) => state.filter.name;
