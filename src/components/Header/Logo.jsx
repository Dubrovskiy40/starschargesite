import { NavLink } from "react-router-dom";
import header from "./img/logo.svg";
import "./Logo.scss"

const Logo = () => {
  return (
    <NavLink to="#l" className="header__logo-link">
      <img src={header} alt="logo" className="header__logo"></img>
    </NavLink>
  );
};

export default Logo;
