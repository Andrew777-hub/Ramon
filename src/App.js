import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContext from '../../context/CartContext';
import BasketModal from './components/BasketModal/BasketModal';
import products from './components/Products/Products';
import bristolProducts from './components/Products/bristolProducts';
import torontoProducts from './components/Products/torontoProducts';
import kelnProducts from './components/Products/kelnProducts';
import kelnOnLegsProducts from './components/Products/kelnOnLegsProducts';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isBasketModalOpen, setBasketModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product.name]);
    console.log('Товар додано в кошик:', product.name);
  };

  const allProducts = [
    ...products,
    ...bristolProducts,
    ...torontoProducts,
    ...kelnProducts,
    ...kelnOnLegsProducts,
  ];

  const closeBasketModal = () => {
    setBasketModalOpen(false);
  };

  return (
      <Router>
        <Header onOpenBasket={() => setBasketModalOpen(true)} />
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
          {}
        </Routes>
        <Footer />
        <BasketModal
          isOpen={isBasketModalOpen}
          onClose={closeBasketModal}
          cartItems={cart.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
          }, {})}
          products={allProducts}
        />
      </Router>
  );
};

export default App;
