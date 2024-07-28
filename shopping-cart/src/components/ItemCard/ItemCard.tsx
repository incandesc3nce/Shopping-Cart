/* eslint-disable react/jsx-one-expression-per-line */
import IItemCard from '../../interfaces/IItemCard';

const ItemCard = ({ item }: { item: IItemCard }) => (
  <article className="flex min-h-96 flex-col items-center rounded-3xl bg-slate-200 p-4 shadow-md">
    <img
      src={item.imgUrl}
      alt={item.title}
      className="h-64 w-64 rounded-3xl object-cover"
    />
    <h3 className="mt-2 text-center text-3xl font-semibold">{item.title}</h3>
    <p className="ml-auto text-2xl">${item.price}</p>
    <div className="mt-6 flex w-full items-center justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className="ml-2 mr-2 h-8 w-8 rounded-lg bg-slate-500 p-0 text-center text-white"
        >
          -
        </button>
        <input
          type="number"
          value={1}
          min={1}
          max={10}
          className="text-1xl h-8 w-10 rounded-lg text-center"
        />
        <button
          type="button"
          className="text-centerd ml-2 mr-2 h-8 w-8 rounded-lg bg-slate-500 p-0 text-white"
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="rounded-3xl bg-emerald-500 p-2 text-white hover:bg-emerald-600"
      >
        Add to Cart
      </button>
    </div>
  </article>
);

export default ItemCard;
