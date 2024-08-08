import React, { useEffect } from 'react';
import './SuccessMessage.css';
import doneImage from './img/done.png';

const SuccessMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-message-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="success-message">
        <img src={doneImage} alt="Success" className="success-image" />
        <div className="success-text">{message}</div>
      </div>
    </div>
  );
};

export default SuccessMessage;
