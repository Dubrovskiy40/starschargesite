import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import {useEffect, useState} from "react";
import { observer } from "mobx-react";
import HeaderStore from "../../store/HeaderStore";

const Header = observer(() => {
  const [modalActive, setModalActive] = useState(false);
    useEffect(() => {
        (async () => {
            await HeaderStore.fetchMenuItems().then() // запрос на динамические пункты меню
        })();
    }, []);

  return (
    <div className="container">
      <Menu items={HeaderStore.items} active={modalActive} setActive={setModalActive} />
      <header className="header">
        <div className="header__adaptive">
          <Logo />
          <div className="header__rigth-block">
            <Lang />
            <button
              onClick={() => setModalActive(!modalActive)}
              className={
                modalActive ? "burg__menu burger--active" : "burg__menu"
              }
            >
              <span />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
});

export default Header;
