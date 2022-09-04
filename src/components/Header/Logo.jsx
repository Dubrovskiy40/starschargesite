import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import "./Logo.scss"

const Logo = () => {
  return (
    <NavLink to="#l" className="header__logo-link">
      <img src={logo} alt="logo" className="header__logo"></img>
    </NavLink>
  );
};

export default Logo;
