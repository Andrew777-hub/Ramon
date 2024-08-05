import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo1 from '../../img/BlackLogo.png';
import logo2 from '../../img/language.png';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="nav-container">
        <div className="header-content">
          <RouterLink to="/" className="logo">
            <img src={logo1} alt="Логотип" />
          </RouterLink>
          <button className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
          </button>
          <ul className={`nav ${menuOpen ? 'open' : ''}`}>
            <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>{t('aboutUs')}</Link></li>
            <li><Link to="assortment" smooth={true} duration={500} onClick={toggleMenu}>{t('assortment')}</Link></li>
            <li><Link to="reviews" smooth={true} duration={500} onClick={toggleMenu}>{t('reviews')}</Link></li>
            <li><Link to="faq" smooth={true} duration={500} onClick={toggleMenu}>{t('faq')}</Link></li>
            <li><Link to="footer" smooth={true} duration={500} onClick={toggleMenu}>{t('findUs')}</Link></li>
          </ul>
          <div className="language-container" ref={dropdownRef}>
            <button className="language-toggle" onClick={toggleDropdown}>
              <div className="language-text">{selectedLanguage === 'ua' ? 'UA' : 'RU'}</div>
              <img
                src={logo2}
                alt="Змінити мову"
                className={`language-icon ${dropdownOpen ? 'rotated' : ''}`}
              />
            </button>
            {dropdownOpen && (
              <ul className="language-dropdown">
                <li onClick={() => selectLanguage('ua')}>Укр</li>
                <li onClick={() => selectLanguage('ru')}>Рус</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
