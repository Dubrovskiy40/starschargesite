import { NavLink } from "react-router-dom";

const Menu = ({ items, active, setActive }) => {
  return (
    <nav
      className="header__nav"
      onClick={() => setActive(false)}
    >
      <ul className="header__nav-list" onClick={(e) => e.stopPropagation()}>
        {items.map((item, index) => (
          <li
            key={index}
            className="header__nav-item"
            onClick={() => setActive(false)}
          >
            <NavLink to={`b${item.menu_order}`} className="header__nav-link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
