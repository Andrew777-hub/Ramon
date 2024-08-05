import React from 'react';
import { useTranslation } from 'react-i18next';
import './Advantages.css';
import logo1 from './img/furniture.png';
import logo2 from './img/video.png';
import logo3 from './img/delivery.png';
import logo4 from './img/assembly.png';
import logo5 from './img/packing.png';
import logo6 from './img/guarantee.png';

export default function Advantages() {
  const { t } = useTranslation();

  return (
    <div className="advantages">
      <h2>{t('ourService')}</h2>
      <div className="advantage-items">
        <div className="advantage-item">
          <img src={logo1} alt={t('assembled')} />
          <h3>{t('assembled')}</h3>
          <p>{t('assembledText')}</p>
        </div>
        <div className="advantage-item">
          <img src={logo2} alt={t('videoInstruction')} />
          <h3>{t('videoInstruction')}</h3>
          <p>{t('videoInstructionText')}</p>
        </div>
        <div className="advantage-item">
          <img src={logo3} alt={t('delivery')} />
          <h3>{t('delivery')}</h3>
          <p>{t('deliveryText')}</p>
        </div>
        <div className="advantage-item">
          <img src={logo4} alt={t('handAssembly')} />
          <h3>{t('handAssembly')}</h3>
          <p>{t('handAssemblyText')}</p>
        </div>
        <div className="advantage-item">
          <img src={logo5} alt={t('qualityPacking')} />
          <h3>{t('qualityPacking')}</h3>
          <p>{t('qualityPackingText')}</p>
        </div>
        <div className="advantage-item">
          <img src={logo6} alt={t('warranty')} />
          <h3>{t('warranty')}</h3>
          <p>{t('warrantyText')}</p>
        </div>
      </div>
    </div>
  );
}
