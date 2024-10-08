import React from 'react';
import { useTranslation } from 'react-i18next';
import logo1 from '../../img/baner.jpg'; 
import './Baner.css';
import DiscountBanner from './DiscountBanner';

export default function Baner() {
  const { t } = useTranslation();

  return (
    <div className="baner">
      <img src={logo1} alt="Baner" className="baner-img" />
      <div className="baner-text">
        {t('banerText')}
      </div>
      <DiscountBanner />
    </div>
  );
}
