const Links = ({ items, active, setActive }) => {
  return (
    <nav onClick={() => setActive(false)}>
      <ul className="ul" onClick={(e) => e.stopPropagation()}>
        {items.map((item, index) => (
          <li key={index} onClick={() => setActive(false)}>
            <a href={`#${item.name}`} className="link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
