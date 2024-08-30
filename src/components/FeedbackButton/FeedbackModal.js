import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import './FeedbackModal.css';

const FeedbackModal = ({ closeModal }) => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const consultationData = {
      fullName,
      phoneNumber,
    };

    try {
      await sendToTelegram(consultationData);
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
    const chatId = '-4581124112';
    const message = `Ім'я: ${formData.fullName}\nТелефон: ${formData.phoneNumber}`;

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

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      {showSuccessMessage && (
        <SuccessMessage
          message="Дякуємо, заявку надіслано! Наш менеджер зв'яжеться з Вами до 5 хвилин!"
          onClose={handleCloseSuccessMessage}
        />
      )}
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
    </>
  );
};

export default FeedbackModal;
