import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? '-' : '+'}</span>
        {question}
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">{answer}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const { t } = useTranslation();
  const faqData = t('faqData', { returnObjects: true });

  return (
    <div className="faq">
      <h1>{t('faqTitle')}</h1>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
