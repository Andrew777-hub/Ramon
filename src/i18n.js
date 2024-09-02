import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uaTranslations from './locales/ua.json';
import engTranslations from './locales/eng.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ua: {
        translation: uaTranslations,
      },
      en: {
        translation: engTranslations,
      },
    },
    lng: 'ua', 
    fallbackLng: 'ua', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
