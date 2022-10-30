// import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import logo_mobile from "../../assets/images/logo/logo-1500.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <a href="#Главная" className="header__logo-link">
      <picture>
        <source srcSet={logo_mobile} media="(max-width: 1500px)" />
        <img src={logo} alt="logo" className="header__logo"></img>
      </picture>
    </a>
  );
};

export default Logo;
