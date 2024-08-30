import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name);
  
      if (existingProduct) {
       
        const newQuantity = existingProduct.quantity + (product.quantity || 1);
        
        return prevCart.map(item =>
          item.name === product.name ? { ...item, quantity: newQuantity } : item
        );
      } else {
       
        return [...prevCart, { name: product.name, quantity: 1 }];
      }
    });
  };
  
  

  

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BasketContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </BasketContext.Provider>
  );
};
