import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import Bed from './components/Bed/Bed';
import Furniture from './components/Furniture/Furniture';
import Bristol from './components/Furniture/Bristol';
import Toronto from './components/Furniture/Toronto';
import Keln from './components/Furniture/Keln';
import KelnOnLegs from './components/Furniture/KelnOnLegs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ScrollToTop from './ScrollToTop';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/bed",
    element: (
      <>
        <ScrollToTop />
        <Bed />
      </>
    ),
  },
  {
    path: "/furniture/bristol",
    element: (
      <>
        <ScrollToTop />
        <Bristol />
      </>
    ),
  },
  {
    path: "/furniture/toronto",
    element: (
      <>
        <ScrollToTop />
        <Toronto />
      </>
    ),
  },
  {
    path: "/furniture/keln",
    element: (
      <>
        <ScrollToTop />
        <Keln />
      </>
    ),
  },
  {
    path: "/furniture/kelnOnLegs",
    element: (
      <>
        <ScrollToTop />
        <KelnOnLegs />
      </>
    ),
  },
  {
    path: "/furniture",
    element: (
      <>
        <ScrollToTop />
        <Furniture />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <ScrollToTop />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/bristol/product/:productId",
    element: (
      <>
        <ScrollToTop />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/toronto/product/:productId",
    element: (
      <>
        <ScrollToTop />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/keln/product/:productId",
    element: (
      <>
        <ScrollToTop />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/kelnOnLegs/product/:productId",
    element: (
      <>
        <ScrollToTop />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/filtered-products",
    element: (
      <>
        <ScrollToTop />
        <FilteredProducts />
      </>
    ),
  },
]);

export default router;
