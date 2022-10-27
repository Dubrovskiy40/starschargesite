import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Links = ({ items, active, setActive }) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  
  return (
    <nav onClick={() => setActive(false)}>
      <ul className="ul" onClick={(e) => e.stopPropagation()}>
        {items.map((item) => (
          <li key={item.id} onClick={() => setActive(false)}>
            <a href={`#${item.name}`} className="link">
              {lang === 'ru' ? item.name : item.name_eng}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
