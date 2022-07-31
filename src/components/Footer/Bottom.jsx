import { NavLink } from "react-router-dom";
import fb from "../../assets/images/footer/facebook.png";
import ig from "../../assets/images/footer/instagram.png";
import tw from "../../assets/images/footer/twitter.png";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="copyright">&copy; Copyright | Yourname</div>
      <div className="socials">
        <li className="link">
          <NavLink to="#">
            <img src={ig} alt="instagram" className="img"></img>
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="#">
            <img src={fb} alt="facebook" className="img"></img>
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="#">
            <img src={tw} alt="twitter" className="img"></img>
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Bottom;
