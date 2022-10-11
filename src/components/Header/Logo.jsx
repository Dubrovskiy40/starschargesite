// import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <a href="#Главная" className="header__logo-link">
      <img src={logo} alt="logo" className="header__logo"></img>
    </a>
  );
};

export default Logo;
