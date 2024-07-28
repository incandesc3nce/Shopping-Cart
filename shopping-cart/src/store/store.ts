import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from './arraySlice';

export const store = configureStore({
  reducer: {
    array: arrayReducer,
  },
});

export default store;
