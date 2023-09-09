import { DataLoader, Posts } from "./ListPosts";
import { usePost } from "./hook";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export const Post = () => {
  const { data, isError, isLoading } = usePost();
  const { t } = useTranslation();

  const handleClick = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <h1>{t("greeting")}</h1>
      <button onClick={() => handleClick()}>trocar</button>
      <DataLoader isError={isError} isloading={isLoading}>
        <Posts data={data ?? []} />
      </DataLoader>
    </>
  );
};
