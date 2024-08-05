import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FeedbackModal from './FeedbackModal';
import './FeedbackButton.css';

const FeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="feedback-button" onClick={openModal}>
        {t('freeConsultation')}
      </button>
      {isModalOpen && <FeedbackModal closeModal={closeModal} />}
    </>
  );
};

export default FeedbackButton;
