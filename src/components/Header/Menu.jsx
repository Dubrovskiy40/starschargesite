import {observer} from "mobx-react";

const Menu = observer(({ items, active, setActive }) => {
  return (
    <nav className="header__nav" onClick={() => setActive(false)}>
      <ul className="header__nav-list" onClick={(e) => e.stopPropagation()}>
        {items.map((item, index) => (
          <li
            key={index}
            className="header__nav-item"
            onClick={() => setActive(false)}
          >
            <a href={`#${item.name}`} className="header__nav-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Menu;
