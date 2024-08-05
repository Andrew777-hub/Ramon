import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FeedbackModal.css';

const ConsultationModal = ({ closeModal }) => {
  const { t } = useTranslation(); 

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const consultationData = {
      fullName,
      phoneNumber,
    };

    fetch('https://api.apix.com/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY_HERE', 
      },
      body: JSON.stringify(consultationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Успішно:', data);
        closeModal();
      })
      .catch((error) => {
        console.error('Помилка:', error);
      });
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close-button">
          ✕
        </button>
        <h2>{t('freeConsultation')}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder={t('fullName')}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="tel"
              placeholder={t('phoneNumber')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
