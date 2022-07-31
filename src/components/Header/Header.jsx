import Logo from "./Logo";
import Lang from "./Lang";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import HeaderStore from "../../store/HeaderStore";

const Header = observer(() => {
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    (async () => {
      await HeaderStore.fetchMenuItems().then(); // запрос на динамические пункты меню
    })();
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <Logo />
        <div
          onClick={() => setModalActive(!modalActive)}
          className={modalActive ? "header__menu active" : "header__menu"}
        >
          <Menu
            items={HeaderStore.items}
            active={modalActive}
            setActive={setModalActive}
          />
          <div className="header__lang-mobile">
            <Lang />
          </div>
        </div>
        <div className="header__right-block">
          <div className="header__lang-desktop">
            <Lang />
          </div>
          <button
            onClick={() => setModalActive(!modalActive)}
            className={modalActive ? "burg__menu burger--active" : "burg__menu"}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
});

export default Header;
