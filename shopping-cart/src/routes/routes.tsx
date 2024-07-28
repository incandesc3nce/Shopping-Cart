import App from '../App';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Shop from '../components/Shop/Shop';

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
];

export default routes;
