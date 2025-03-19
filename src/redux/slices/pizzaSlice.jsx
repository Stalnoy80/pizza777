import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizzaSlice/fetchPizzasStatus",
  async (params) => {
    const { category, searchValue, page, sortedList } = params;
    const { data } = await axios.get(
      `https://813cecfc1deed960.mokky.dev/items?${
        category ? `category=${category}` : ""
      }&sortBy=${sortedList}&title=*${searchValue}&page=${page}&limit=4`
    );

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchPizzas.pending, (state) => {
      console.log(fetchPizzas.pending.toString());
      // Add user to the state array
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(fetchPizzas.fulfilled.toString());
      state.items = action.payload.items;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      console.log(fetchPizzas.rejected.toString());
      // Add user to the state array
      state.status = "error";
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setItems, extraReducers } = pizzaSlice.actions;

export default pizzaSlice.reducer;
