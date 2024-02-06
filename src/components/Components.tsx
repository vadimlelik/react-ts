import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation();
  const handleTranslation = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <div>
      <button onClick={handleTranslation}>{t("Перевод")} </button>
      <h1>{t("Тестовый пример")}</h1>
      <div>{t("Перевод")}</div>
    </div>
  );
};

export default Component;
