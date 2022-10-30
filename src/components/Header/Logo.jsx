// import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import logo_tabl from "../../assets/images/logo/logo-1024.svg";
import logo_desc from "../../assets/images/logo/logo-1500.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <a href="#Главная" className="header__logo-link">
      <picture>
        <source srcSet={logo_tabl} media="(max-width: 1024px)" />
        <source srcSet={logo_desc} media="(max-width: 1500px)" />
        <img src={logo} alt="logo" className="header__logo"></img>
      </picture>
    </a>
  );
};

export default Logo;
