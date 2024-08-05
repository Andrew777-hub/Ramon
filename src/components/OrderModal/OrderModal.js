import React, { useState } from 'react';
import './OrderModal.css';

const OrderModal = ({ closeModal, handleSubmit, productName }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Form data:', { fullName, phoneNumber, productName }); 
    handleSubmit({ fullName, phoneNumber, productName });
  };
  

  return (
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
  );
};

export default OrderModal;