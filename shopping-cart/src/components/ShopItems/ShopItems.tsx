import items from './items';
import ItemCard from '../ItemCard/ItemCard';

const ShopItems = () => (
  <section className="m-5">
    <h2 className="mt-4 text-center text-3xl font-semibold">Shop Items</h2>
    <div
      className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default ShopItems;
