import { NavLink } from "react-router-dom";
import "./Lang.scss"
import {useTranslation} from "react-i18next";

const Lang = ({ active, setActive }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header__lang">
      <button className="header__lang-link" onClick={() => changeLanguage("ru")}>
        Рус
      </button>
      <button className="header__lang-link" onClick={() => changeLanguage("en")}>
        Eng
      </button>
    </div>
  );
};

export default Lang;
