import App from '../App';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Shop from '../components/Shop/Shop';
import Cart from '../components/Cart/Cart';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
];

export default routes;
