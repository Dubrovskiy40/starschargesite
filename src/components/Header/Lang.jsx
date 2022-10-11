import "./Lang.scss";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

const Lang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header__lang">
      <button
        className={classnames("header__lang-link", {
          active: i18n.language === "ru",
        })}
        onClick={() => changeLanguage("ru")}
      >
        Рус
      </button>
      <button
        className={classnames("header__lang-link", {
          active: i18n.language === "en",
        })}
        onClick={() => changeLanguage("en")}
      >
        Eng
      </button>
    </div>
  );
};

export default Lang;
