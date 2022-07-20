import { NavLink } from "react-router-dom";
import header from "./img/logo.svg";

const Logo = () => {
  return (
    <NavLink to="#l" className="header__logo__link">
      <img src={header} alt="logo" className="header__logo"></img>
    </NavLink>
  );
};

export default Logo;
