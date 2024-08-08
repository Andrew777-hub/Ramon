import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
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
  const navigate = useNavigate();

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

  const handleNavigation = (section) => {
    navigate('/'); // Navigate to the home page
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -60, // Correct positioning offset
      });
    }, 100); // Delay to ensure navigation completes

    // Close the menu after selection
    if (menuOpen) {
      toggleMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="nav-container">
        <div className="header-content">
          <RouterLink to="/" className="logo" onClick={scrollToTop}>
            <img src={logo1} alt="Логотип" />
          </RouterLink>
          <button className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'change' : ''}`}></div>
          </button>
          <ul className={`nav ${menuOpen ? 'open' : ''}`}>
            <li><button onClick={() => handleNavigation('about')}>{t('aboutUs')}</button></li>
            <li><button onClick={() => handleNavigation('assortment')}>{t('assortment')}</button></li>
            <li><button onClick={() => handleNavigation('reviews')}>{t('reviews')}</button></li>
            <li><button onClick={() => handleNavigation('faq')}>{t('faq')}</button></li>
            <li><button onClick={() => handleNavigation('footer')}>{t('findUs')}</button></li>
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
                <li onClick={() => selectLanguage('ua')}>UA</li>
                <li onClick={() => selectLanguage('ru')}>RU</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
