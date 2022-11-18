import { configureStore } from "@reduxjs/toolkit";
import ItemsReducer from "./Features/Items/ItemsSlice";

export const store = configureStore({
  reducer: {
    Items: ItemsReducer,
  },
});
