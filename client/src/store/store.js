import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "./conversationSlice/conversationSlice";
import filterReducer from "./filterSlice/filterSlice";

export const store = configureStore({
  reducer: { conversations: conversationReducer, filter: filterReducer },
});
