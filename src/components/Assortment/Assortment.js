import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Assortment.css';
import logo1 from '../../img/commode.png';
import logo2 from '../../img/bed.png';

export default function Assortment() {
  const { t } = useTranslation();

  return (
    <div className="assortment">
      <Link to="/furniture" className="block furniture">
        <img src={logo1} alt={t('assortmentFurniture')} />
        <p>{t('assortmentFurniture')}</p>
      </Link>
      <Link to="/bed" className="block bed">
        <img src={logo2} alt={t('assortmentBed')} />
        <p>{t('assortmentBed')}</p>
      </Link>
    </div>
  );
}
