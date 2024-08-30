import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { BasketContext } from '../../context/BasketContext';
import './OrderModal.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage';

const OrderModal = ({ closeModal, cartItems, closeBasketModal }) => {
  const { t } = useTranslation(); 
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useContext(BasketContext);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      phoneNumber,
      products: cartItems.map(item => `${item.name} (${item.quantity} шт.)`).join(', ')
    };

    try {
      await sendToTelegram(formData);
      setShowSuccessMessage(true);

      setTimeout(() => {
        closeModal();
        clearCart();
        if (closeBasketModal) {
          closeBasketModal();
        }
        navigate('/');
        window.scrollTo(0, 0);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendToTelegram = async (formData) => {
    const token = '6994036779:AAH2pYeGQm-eOYT7qaYfi2WLd0hxfTt4SYM';
    const chatId = '-4581124112';
    const message = `Ім'я: ${formData.fullName}\nТелефон: ${formData.phoneNumber}\nТовари: ${formData.products}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: message,
    };

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  };

  return (
    <>
      {showSuccessMessage && (
        <SuccessMessage
          message={t('successMessage')} 
          onClose={() => setShowSuccessMessage(false)}
        />
      )}
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal} className="close-button">
            ✕
          </button>
          <h2>{t('orderModalTitle')}</h2> {}
          <form onSubmit={submitForm}>
            <label>
              <input
                type="text"
                placeholder={t('fullNamePlaceholder')} 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder={t('phoneNumberPlaceholder')} 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <h3>{t('selectedItemsTitle')}</h3> {}
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {t('itemFormat', { name: item.name, quantity: item.quantity })} {}
                </li>
              ))}
            </ul>
            <button type="submit">{t('submitButton')}</button> {}
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
