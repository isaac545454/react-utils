import i18n from "i18next";


export const useHeader = () => {

    const changeLanguage = () => {
        const newLanguage = i18n.language === "en" ? "es" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return {
        changeLanguage
    }
}