import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ItemList: [],
  Item: null,
};

const ItemsSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      state.ItemList = [...state.ItemList, action.payload];
    },
    DeleteItem: (state, action) => {
      state.ItemList = state.ItemList.filter(
        (item, index) => index !== action.payload
      );
    },
    UpdateItems: (state, action) => {
      state.ItemList = state.ItemList.map((Item, id) =>
        id === action.payload.index ? action.payload.task : Item
      );
    },

    UpdateItem: (state, action) => {
      state.Item = action.payload;
    },
    clear: (state, action) => {
      state.Item = null;
    },
  },
});
export const { AddItem, DeleteItem, UpdateItems, UpdateItem, clear } =
  ItemsSlice.actions;
export default ItemsSlice.reducer;
