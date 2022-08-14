import { NavLink } from "react-router-dom";
import { Vk } from "./SVG/Vk";
import { Tg } from "./SVG/Tg";

const Socials = () => {
  return (
    <div className="socials">
      <li className="link">
        <NavLink className="img" to="#">
          <Tg />
        </NavLink>
      </li>
      <li className="link">
        <NavLink className="img" to="#">
          <Vk />
        </NavLink>
      </li>
    </div>
  );
};

export default Socials;
