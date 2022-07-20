import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li className="header__nav__item">
          <NavLink to="#l" className="header__nav__link">
            О станции
          </NavLink>
        </li>
        <li className="header__nav__item">
          <NavLink to="#l" className="header__nav__link">
            Наша команда
          </NavLink>
        </li>
        <li className="header__nav__item">
          <NavLink to="#l" className="header__nav__link">
            Как это работает
          </NavLink>
        </li>
        <li className="header__nav__item">
          <NavLink to="#l" className="header__nav__link">
            Новости
          </NavLink>
        </li>
        <li className="header__nav__item">
          <NavLink to="#l" className="header__nav__link">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
