import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "createdAt",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = filterSlice.actions;
export default filterSlice.reducer;
