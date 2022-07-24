import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const items = [{value: "О станции", href:"#s"}, {value: "Наша команда", href:"#s"}, {value: "Как это работает", href:"#s"}, {value: "Новости", href:"#s"}, {value: "Контакты", href:"#s"}]
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <Menu items={items} active={modalActive} setActive={setModalActive}/>
      <header className="header">
        <div className="header__adaptive">
          <Logo />
          <div className="header__rigth-block">
            <Lang />
            <button onClick={() => setModalActive(!modalActive)} className={modalActive ? "burg__menu burger--active" : "burg__menu"}>
              <span/>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
