import { configureStore } from "@reduxjs/toolkit";
import bearishReducer from "../features/bearishSlice";

export const store = configureStore({
  reducer: {
    bearish: bearishReducer,
  },
});
