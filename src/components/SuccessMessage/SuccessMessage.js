import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SuccessMessage.css';
import doneImage from './img/done.png';

const SuccessMessage = ({ onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-message-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="success-message">
        <img src={doneImage} alt="Success" className="success-image" />
        <div className="success-text">{t('successMessage')}</div> {}
      </div>
    </div>
  );
};

export default SuccessMessage;
