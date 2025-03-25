import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  category: 0,
  sort: 0,
  page: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.category = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setPageCount: (state, action) => {
      state.page = action.payload;
    },

    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.category = Number(action.payload.category);
      state.page = Number(action.payload.page);
    },
  },
});

export const selectSort = (state) => state.filterSlice.sort;

export const selectFilter = (state) => state.filterSlice;
// Action creators are generated for each case reducer function
export const {
  setCategory,
  setSort,
  setPageCount,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
