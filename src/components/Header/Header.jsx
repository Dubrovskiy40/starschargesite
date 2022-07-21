import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import Burger from "./Burger";

const Header = () => {
  const items = [{value: "О станции", href:"#s"}, {value: "Наша команда", href:"#s"}, {value: "Как это работает", href:"#s"}, {value: "Новости", href:"#s"}, {value: "Контакты", href:"#s"}]
  return (
    <header className="header">
      <Logo />
      <Menu items={items}/>
      <div className="header__rigth-block">
        <Lang />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
