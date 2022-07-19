import Logo from "./Logo";
import Menu from "./Menu";
import Lang from "./Lang";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <Lang />
    </header>
  );
};

export default Header;
