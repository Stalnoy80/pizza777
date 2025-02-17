import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: 0,
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
  },
});

// console.log(filterSlice.actions.setCategory);

// Action creators are generated for each case reducer function
export const { category, setCategory, sort, setSort } = filterSlice.actions;

export default filterSlice.reducer;
