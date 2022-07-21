import { NavLink } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        {items.map((item) => (
          <li className="header__nav__item">
            <NavLink to={item.href} className="header__nav__link">
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
