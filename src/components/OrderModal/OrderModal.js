import React, { useState } from 'react';
import './OrderModal.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage';

const OrderModal = ({ closeModal, handleSubmit, productName }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = { fullName, phoneNumber, productName };

    try {
      await sendToTelegram(formData);
      setShowSuccessMessage(true);

      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendToTelegram = async (formData) => {
    const token = '6994036779:AAH2pYeGQm-eOYT7qaYfi2WLd0hxfTt4SYM';
    const chatId = '889435386';
    const message = `Ім'я: ${formData.fullName}\nТелефон: ${formData.phoneNumber}\nТовар: ${formData.productName}`;

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

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      {showSuccessMessage && (
        <SuccessMessage 
          message="Дякуємо, заявку надіслано! Наш менеджер зв'яжеться з Вами до 5 хвилин!" 
          onClose={closeSuccessMessage} 
        />
      )}
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal} className="close-button">
            ✕
          </button>
          <h2>Заявка на замовлення</h2>
          <form onSubmit={submitForm}>
            <label>
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder="Ваш номер телефону"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <p>Товар: {productName}</p>
            <button type="submit">Відправити</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
