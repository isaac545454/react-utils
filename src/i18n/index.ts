import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ptBR } from './location/user-br';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            br: {
                translation:ptBR,
            },
            en: {
                translation: {
                    
                },
            },
        },
        lng: 'en',  
        fallbackLng: 'en',  
        interpolation: {
            escapeValue: false,
        },
    })
export default i18n;