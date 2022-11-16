import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Item: null,
};

const ItemSlice = createSlice({
  name: "Item",
  initialState,
  reducers: {
    update: (state, action) => {
      //   console.log("action", action.payload);
      state.Item = action.payload;
      console.log("state.UpdatingItem", state.Item);
    },
    clear: (state, action) => {
      state.Item = null;
    },
  },
});
export const { update, clear } = ItemSlice.actions;
export default ItemSlice.reducer;
