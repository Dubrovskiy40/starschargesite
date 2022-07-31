import { NavLink } from "react-router-dom";
import logo from "../../assets/images/footer/footer.png";

const Logo = () => {
  return (
    <NavLink to="#" className="logo">
      <img src={logo} alt="logo" className="img"></img>
    </NavLink>
  );
};

export default Logo;
