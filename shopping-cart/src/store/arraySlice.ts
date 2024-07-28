import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IItemCard from '../interfaces/IItemCard';

interface ItemWtihQuantity {
  item: IItemCard;
  quantity: number;
}

const arraySlice = createSlice({
  name: 'array',
  initialState: [] as ItemWtihQuantity[],
  reducers: {
    addToArray: (state, action: PayloadAction<ItemWtihQuantity>) => {
      state.push(action.payload);
    },
    removeFromArray: (state, action: PayloadAction<ItemWtihQuantity>) => {
      return state.filter((item: any) => item.item.id !== action.payload.item.id);
    },
  },
});

export const { addToArray, removeFromArray } =
  arraySlice.actions;

export default arraySlice.reducer;
