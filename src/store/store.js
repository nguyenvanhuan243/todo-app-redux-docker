import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/index";

const store = configureStore({
  reducer: reducer,
});

export default store;
