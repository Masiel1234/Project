import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import enTranslation from './locales/en/en.json';
import esTranslation from './locales/es/es.json';
import frTranslation from './locales/fr/fr.json';
import jpTranslation from './locales/jp/jp.json';
import zhTranslation from './locales/zh/zh.json';




i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      
      },
      es: {
        translation: esTranslation,
        
      },
      
        fr:{
        translation: frTranslation
      },
      jp:{
        translation: jpTranslation
      },
      zh:{
        translation: zhTranslation
      }
      
    },
    lng: 'en', 
    fallbackLng: ['en', 'fr','zh', 'jp','es'],
    ns: ['translation', 'isekaiQuestions'], 
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;