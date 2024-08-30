import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo1 from '../../img/WhiteLogo.png';
import facebookIcon from './img/facebook.png';
import instagramIcon from './img/instagram.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo1} alt="Тумба" />
        </div>
        <div className="footer-contacts">
          <h4>{t('footerContactsTitle')}</h4>
          <p>
            <a
              href="tel:+38 096 933 22 52"  // Заміни на фактичний номер телефону
              rel="noopener noreferrer"
            >
              {t('footerPhone')}
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/Ramon+meble/@49.5422525,25.5928368,15z/data=!4m6!3m5!1s0x4730377041637f2f:0x3abc2cac242317d4!8m2!3d49.5422525!4d25.5928368!16s%2Fg%2F11y5z6r557?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footerAddress')}
            </a>
          </p>
          <p>
            <a
              href="mailto:ramon.zakaz@gmail.com"  
              rel="noopener noreferrer"
            >
              {t('footerEmail')}
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h4>{t('footerSocialTitle')}</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100071598656134" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/ramon.meble?igsh=ZjA1dmd4YWF4d2s0" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        {t('footerRights')} &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
