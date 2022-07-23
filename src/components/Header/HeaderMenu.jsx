import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import HeaderStore from "../../store/HeaderStore";

const HeaderMenu = () => {
  return (
    <header className="header">
      <Logo />
      <Menu items={HeaderStore.items} />
      <div className="header__rigth-block">
        <Lang />
      </div>
    </header>
  );
};

export default HeaderMenu;
