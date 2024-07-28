import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
