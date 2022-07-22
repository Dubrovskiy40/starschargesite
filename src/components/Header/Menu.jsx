import { NavLink } from "react-router-dom";

const Menu = ({ items, active, setActive }) => {
  return (
    <nav className={active ? "header__nav active" : "header__nav"} onClick={() => setActive(false)}>
      <ul className="header__nav__list" onClick={e => e.stopPropagation()}>
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
