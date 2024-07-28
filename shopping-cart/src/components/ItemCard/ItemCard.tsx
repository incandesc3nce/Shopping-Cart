/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import IItemCard from '../../interfaces/IItemCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  setArray,
  addToArray,
  removeFromArray,
  clearArray,
} from '../../store/arraySlice';

const ItemCard = ({ item }: { item: IItemCard }) => {
  const [quantity, setQuantity] = useState(1);
  const array = useSelector((state: any) => state.array);
  const dispatch = useDispatch();

  const handleReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <article className="flex min-h-96 flex-col items-center rounded-3xl bg-slate-200 p-4 shadow-md">
      <img
        src={item.imgUrl}
        alt={item.title}
        className="h-64 w-64 rounded-3xl object-cover"
      />
      <h3 className="mt-2 text-center text-3xl font-semibold">{item.title}</h3>
      <p className="ml-auto mt-3 text-2xl">${item.price}</p>
      <div className="mt-6 flex w-full items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="ml-2 mr-2 h-8 w-8 rounded-lg bg-slate-500 p-0 text-center text-white"
            onClick={handleReduceQuantity}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={10}
            className="text-1xl h-8 w-1/2 rounded-lg text-center"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            type="button"
            className="text-centerd ml-2 mr-2 h-8 w-8 rounded-lg bg-slate-500 p-0 text-white"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="rounded-3xl bg-emerald-500 p-2 text-white hover:bg-emerald-600"
          onClick={() => {
            dispatch(addToArray({ item, quantity }));
            setQuantity(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ItemCard;
