import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Menu = observer(({ items, active, setActive }) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  
  return (
    <nav className="header__nav" onClick={() => setActive(false)}>
      <ul className="header__nav-list" onClick={(e) => e.stopPropagation()}>
        {items
          .map((item) => (
            <li
              key={item.id}
              className="header__nav-item"
              onClick={() => setActive(false)}
            >
              <a href={`#${item.name_eng}`} className="header__nav-link">
                {lang === 'ru' ? item.name : item.name_eng}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
});

export default Menu;
