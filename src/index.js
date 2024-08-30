import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes';
import ScrollToTop from './ScrollToTop';
import './i18n'; 
import { BasketProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </BasketProvider>
  </React.StrictMode>
);
