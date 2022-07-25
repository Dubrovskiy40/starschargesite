import { NavLink } from "react-router-dom";

const Menu = ({ items, active, setActive }) => {
  return (
    <nav
      className={active ? "header__nav active" : "header__nav"}
      onClick={() => setActive(false)}
    >
      <ul className="header__nav__list" onClick={(e) => e.stopPropagation()}>
        {items.map((item, index) => (
          <li
            key={index}
            className="header__nav__item"
            onClick={() => setActive(false)}
          >
            <NavLink to={`b${item.menu_order}`} className="header__nav__link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
