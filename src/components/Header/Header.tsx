import { styles } from "./styles";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { CardEn, CardEs } from "./components/card";

export function Header() {
  const { t } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const RenderLanguageIcon = () => {
    return i18n.language === "en" ? <CardEs /> : <CardEn />;
  };

  return (
    <header className={styles.container}>
      {/*  */}
      <h1 className={styles.text}>{t("greeting")}</h1>
      {/*  */}
      <div className="absolute right-20">
        <button onClick={changeLanguage}>
          <RenderLanguageIcon />
        </button>
      </div>
      {/*  */}
    </header>
  );
}
