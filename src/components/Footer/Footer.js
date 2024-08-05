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
          <p>{t('footerPhone')}</p>
          <p>{t('footerAddress')}</p>
          <p>{t('footerEmail')}</p>
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
