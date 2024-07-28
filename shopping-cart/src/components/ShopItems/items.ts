import IItemCard from '../../interfaces/IItemCard';
import item1 from '../../assets/kaws-items/item_1.png';
import item2 from '../../assets/kaws-items/item_2.png';
import item3 from '../../assets/kaws-items/item_3.png';
import item4 from '../../assets/kaws-items/item_4.png';
import item5 from '../../assets/kaws-items/item_5.png';
import item6 from '../../assets/kaws-items/item_6.png';
import item7 from '../../assets/kaws-items/item_7.png';
import item8 from '../../assets/kaws-items/item_8.jpg';
import item9 from '../../assets/kaws-items/item_9.jpg';
import item10 from '../../assets/kaws-items/item_10.jpg';

const items: IItemCard[] = [
  {
    id: 1,
    title: 'White Kaws Figure',
    price: 100,
    imgUrl: item1,
  },
  {
    id: 2,
    title: 'Black Kaws Figure',
    price: 200,
    imgUrl: item2,
  },
  {
    id: 3,
    title: 'Split Kaws Figure',
    price: 300,
    imgUrl: item3,
  },
  {
    id: 4,
    title: 'Supreme Kaws Figure',
    price: 400,
    imgUrl: item4,
  },
  {
    id: 5,
    title: 'Stormtrooper Kaws Figure',
    price: 500,
    imgUrl: item5,
  },
  {
    id: 6,
    title: 'Money Kaws Figure',
    price: 600,
    imgUrl: item6,
  },
  {
    id: 7,
    title: 'Kaws Black T-Shirt',
    price: 700,
    imgUrl: item7,
  },
  {
    id: 8,
    title: 'Kaws White T-Shirt',
    price: 800,
    imgUrl: item8,
  },
  {
    id: 9,
    title: 'Batman Kaws Figure',
    price: 900,
    imgUrl: item9,
  },
  {
    id: 10,
    title: 'Kaws Chum Figure',
    price: 1000,
    imgUrl: item10,
  },
];

export default items;
