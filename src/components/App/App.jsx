import style from "./App.module.scss";
import appStore from "../../assets/images/app/appStore.png"
import googleStore from "../../assets/images/app/googleStore.png"
import charge from "../../assets/images/app/chargeImg.png"

const App = () => {
  return (
    <section className="section app" id="Приложение">
      <div className="container">
        <div className={style.app_wrapper}>
          <div className="flex">
            <div className={style.app__descr}>
              <h3 className={`${style.app__title} title`}>
                Бронируй и заряжай c нашим приложением
              </h3>
              <p className={`${style.app__text} descr`}>
                Великий Оксмокс предупреждал ee o злых запятых, диких знаках
                вопроса и коварных точках c запятой, но текст не дал сбить себя
                c толку.
              </p>
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
            <img src={charge}></img>
            <div className={style.app__img}></div>
          </div>
          <div className={style.app__bottomCards}></div>
        </div>
      </div>
    </section>
  );
};

export default App;
