import { NavLink } from "react-router-dom";

const Lang = () => {
  return (
    <div className="header__lang">
      <NavLink to="#l" className="header__lang__link">
        Рус
      </NavLink>
      <NavLink to="#l" className="header__lang__link">
        Eng
      </NavLink>
    </div>
  );
};

export default Lang;
