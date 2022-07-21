import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import Burger from "./Burger";
import HeaderStore from "../../store/HeaderStore";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu items={HeaderStore.items}/>
      <div className="header__rigth-block">
        <Lang />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
