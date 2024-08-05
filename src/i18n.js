import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uaTranslations from './locales/ua.json';
import ruTranslations from './locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ua: {
        translation: uaTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
    lng: 'ua',
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
