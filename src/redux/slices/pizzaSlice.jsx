import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizzaSlice/fetchPizzasStatus",
  async (params, thunkApi) => {
    const { category, searchValue, page, sortedList } = params;

    const { data } = await axios.get(
      `https://813cecfc1deed960.mokky.dev/items?${
        category ? `category=${category}` : ""
      }&sortBy=${sortedList}&title=*${searchValue}&page=${page}&limit=4`
    );

    return data;

    //   if (data.length === 0) {
    //     return thunkApi.rejectWithValue("Пусто");
    //   }

    //   return thunkApi.fulfillWithValue(data);
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
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const selectPizza = (state) => state.pizzaSlice;
// Action creators are generated for each case reducer function
export const { setItems, extraReducers } = pizzaSlice.actions;

export default pizzaSlice.reducer;
