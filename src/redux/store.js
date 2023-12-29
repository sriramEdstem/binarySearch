import { configureStore } from "@reduxjs/toolkit";
import binaryReducer from "./binarySlice";
const store = configureStore({
  reducer: {
    binary: binaryReducer,
  },
});

export default store;
