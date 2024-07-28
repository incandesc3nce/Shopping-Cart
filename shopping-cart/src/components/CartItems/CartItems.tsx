import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromArray,
} from '../../store/arraySlice';

const CartItems = () => {
  const array = useSelector((state: any) => state.array);
  const dispatch = useDispatch();

  const handleRemoveItem = (item: any) => {
    dispatch(removeFromArray(item));
  };

  return (
    <section>
      <h2 className="mt-4 text-center text-3xl font-semibold">Cart Items</h2>
      <div className="max-w-100% m-2 flex flex-col items-center gap-4">
        {array.map((arrayItem: any) => (
          <article className="min-h-30 flex w-3/4 flex-col items-center justify-between rounded-3xl bg-slate-200 p-1 shadow-md md:flex-row md:p-4 pb-4">
            <img
              src={arrayItem.item.imgUrl}
              alt={arrayItem.item.title}
              className="h-28 w-28 rounded-full object-cover"
            />
            <h3 className="text-center text-xl font-semibold">
              {arrayItem.item.title}
            </h3>
            <div className='flex flex-col items-center mb-4 mt-4'>
              <p className="text-xl">
                ${arrayItem.item.price * arrayItem.quantity}
              </p>
              <p>Quantity: {arrayItem.quantity}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  handleRemoveItem(arrayItem);
                }}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          </article>
        ))}
        <p>
          Total: $
          {array.reduce(
            (acc: any, item: any) => acc + item.item.price * item.quantity,
            0,
          )}
        </p>
      </div>
    </section>
  );
};

export default CartItems;
