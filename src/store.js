import { configureStore } from "@reduxjs/toolkit";
import ItemsReducer from "./Features/Items/ItemsSlice";
import ItemReducer from "./Features/Item/ItemSlice";

export const store = configureStore({
  reducer: {
    Items: ItemsReducer,
    Item: ItemReducer,
  },
});
