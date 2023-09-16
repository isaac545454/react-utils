import { styles } from "./styles";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { CardEn, CardEs } from "./components/card";
import { useHeader } from "./hook";

export function Header() {
  const { t } = useTranslation();
  const { changeLanguage } = useHeader();

 

  return (
    <header className={styles.container}>
      {/*  */}
      <h1 className={styles.text}>{t("greeting")}</h1>
      {/*  */}
      <div className="absolute right-20">
        <button onClick={changeLanguage}>
       {i18n.language === "en" ? <CardEs /> : <CardEn />}
        </button>
      </div>
      {/*  */}
    </header>
  );
}
