import appStore from "../../assets/images/app/appStore.png";
import googleStore from "../../assets/images/app/googleStore.png";
// import charge from "../../assets/images/app/appDescr.svg";
import { AppCard } from "./svg";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const App = () => {
  const { t } = useTranslation();

  const data = [
    { id: "1", name: t("app.item1") },
    { id: "2", name: t("app.item2") },
    { id: "3", name: t("app.item3") },
    { id: "4", name: t("app.item4") },
  ];

  return (
    <section className="section app" id="Приложение">
      <div className="container">
        <div className="app_wrapper">
          <div className="app__top">
            <div className="app__descr">
              <h2 className="app__title title">{t("app.title")}</h2>
              <p className="app__text descr">
                Великий Оксмокс предупреждал ee o злых запятых, диких знаках
                вопроса и коварных точках c запятой, но текст не дал сбить себя
                c толку.
              </p>
              <div className="flex">
                <a
                  className="app__appStore_link app__link"
                  href="#s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="app__appStore_img app__img"
                    src={appStore}
                    alt="appStore"
                  />
                </a>
                <a
                  className="app__googleStore_link app__link"
                  href="#s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="app__googleStore_img app__img"
                    src={googleStore}
                    alt="googleStore"
                  />
                </a>
              </div>
            </div>
            <img
              className="app__img_bg"
              src={/*charge || */ ""}
              alt="description"
            />
          </div>
          <ul className="app__bottomCards">
            {data?.map((card) => {
              return (
                <li className="app__bottomCard" key={card.id}>
                  <AppCard className="app__bottomCard_svg" />
                  <p className="app__bottomCard_text">{card.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
