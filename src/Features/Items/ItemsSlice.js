import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ItemList: [],
};

const ItemsSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      // console.log("action", action.payload);
      state.ItemList = [...state.ItemList, action.payload];
      // console.log("state.ItemList", state.ItemList);
    },
    DeleteItem: (state, action) => {
      console.log("deleteAction", action);
      state.ItemList = state.ItemList.filter(
        (item, index) => index !== action.payload
      );
    },
    UpdateItem: (state, action) => {
      console.log("updateaction", action.payload);
      state.ItemList = state.ItemList.map((Item, id) =>
        id === action.payload.index ? action.payload.task : Item
      );
    },
  },
});
export const { AddItem, DeleteItem, UpdateItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;
