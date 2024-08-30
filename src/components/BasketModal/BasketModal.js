import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import { BasketContext } from '../../context/BasketContext';
import './BasketModal.css';
import OrderModal from '../OrderModal/OrderModal'; 
import minusIcon from '../../components/BasketModal/img/minus.png'; 
import plusIcon from '../../components/BasketModal/img/plus.png'; 

const BasketModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation(); 
  const { cart, removeFromCart, addToCart } = useContext(BasketContext);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      addToCart({ ...product, quantity: -1 });
    } else {
      removeFromCart(product.name);
    }
  };

  const handleIncrease = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const openOrderModal = () => {
    setOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('basket-modal-overlay')) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="basket-modal-overlay" onClick={handleOverlayClick}>
          <div className="basket-modal-content">
            <button className="close-button" onClick={onClose}>✕</button>
            <h2>{t('basketTitle')}</h2> {}
            {totalQuantity === 0 ? (
              <p>{t('emptyBasket')}</p> 
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <span className="basket-item-name">{item.name}</span>
                    <span className="basket-item-quantity">
                      <button className="decrease-button" onClick={() => handleDecrease(item)}>
                        <img src={minusIcon} alt="Decrease" />
                      </button>
                      {t('quantityWithUnit', { count: item.quantity })} 
                      <button className="increase-button" onClick={() => handleIncrease(item)}>
                        <img src={plusIcon} alt="Increase" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {totalQuantity > 0 && (
              <button className="send-for-calculation-button" onClick={openOrderModal}>
                {t('sendForCalculation')} 
              </button>
            )}
          </div>
        </div>
      )}
      {isOrderModalOpen && (
        <OrderModal 
          closeModal={closeOrderModal} 
          cartItems={cart} 
          closeBasketModal={onClose} 
        />
      )}
    </>
  );
};

export default BasketModal;
