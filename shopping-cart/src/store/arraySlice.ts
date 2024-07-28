import { createSlice } from '@reduxjs/toolkit';

const arraySlice = createSlice({
  name: 'array',
  initialState: [],
  reducers: {
    setArray: (state, action) => {
      return action.payload;
    },
    addToArray: (state, action) => {
      state.push(action.payload);
    },
    removeFromArray: (state, action) => {
      return state.filter(item => item.item.id !== action.payload.item.id);
    },
    clearArray: () => {
      return [];
    },
  },
});

export const { setArray, addToArray, removeFromArray, clearArray } =
  arraySlice.actions;

export default arraySlice.reducer;
