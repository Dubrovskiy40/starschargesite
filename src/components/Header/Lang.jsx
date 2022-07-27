import { NavLink } from "react-router-dom";
import "./Lang.scss"

const Lang = ({ active, setActive }) => {
  return (
    <div className="header__lang">
      <NavLink to="#l" className="header__lang-link">
        Рус
      </NavLink>
      <NavLink to="#l" className="header__lang-link">
        Eng
      </NavLink>
    </div>
  );
};

export default Lang;
