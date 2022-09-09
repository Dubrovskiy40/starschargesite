import style from "./AppDescription.module.scss";
import appStore from "../../assets/images/app/appStore.png";
import googleStore from "../../assets/images/app/googleStore.png";
import charge from "../../assets/images/app/chargeImg.png";
import { AppCard } from "./svg";

const App = () => {
  return (
    <section className="section app" id="Приложение">
      <div className="container">
        <div className={style.app_wrapper}>
          <div className={`${style.app__top} flex`}>
            <div className={style.app__descr}>
              <h3 className={`${style.app__title} title`}>
                Бронируй и заряжай c нашим приложением
              </h3>
              <p className={`${style.app__text} descr`}>
                Великий Оксмокс предупреждал ee o злых запятых, диких знаках
                вопроса и коварных точках c запятой, но текст не дал сбить себя
                c толку.
              </p>
              <div className="flex">
                <a
                  className={`${style.app__appStore_link} ${style.app__link}`}
                  href="#s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={appStore} alt=""></img>
                </a>
                <a
                  className={`${style.app__googleStore_link} ${style.app__link}`}
                  href="#s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={googleStore} alt=""></img>
                </a>
              </div>
            </div>
            <img src={charge} alt="description"></img>
          </div>
          <ul className={`${style.app__bottomCards} flex`}>
            <li className={`${style.app__bottomCard} flex`}>
              <AppCard className={style.svg} />
              <p></p>
            </li>
            <li className={`${style.app__bottomCard} flex`}>
              <AppCard className={style.svg} />
              <p></p>
            </li>
            <li className={`${style.app__bottomCard} flex`}>
              <AppCard className={style.svg} />
              <p></p>
            </li>
            <li className={`${style.app__bottomCard} flex`}>
              <AppCard className={style.svg} />
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
