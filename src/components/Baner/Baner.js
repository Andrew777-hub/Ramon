import React from 'react';
import { useTranslation } from 'react-i18next';
import logo1 from '../../img/baner.jpg'; 
import './Baner.css';

export default function Baner() {
  const { t } = useTranslation();

  return (
    <div className="baner">
      <img src={logo1} alt="Baner" />
      <div className="baner-text">
        {t('banerText')}
      </div>
    </div>
  );
}


