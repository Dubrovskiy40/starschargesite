import React from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const MapContainer = (props) => {
  const { t } = useTranslation();

  const data = [
    {id: '1', path: '/images/map/type1.png', title: 'CHAdeMO', characteristics: '50 кВт', cost: '70 Р/мин'},
    {id: '2', path: '/images/map/type2.png', title: 'Yazaki (Type 1)', characteristics: '23 кВт', cost: '70 Р/мин'},
    {id: '3', path: '/images/map/type3.png', title: 'Mennekes (Type 2)', characteristics: '23 кВт', cost: '50 Р/мин'},
  ];

  return (
    <section id={props.menuName} className="map">
      <div className="container">
        <div className="map__main">
          <h2 className="map__title title">{t("mapContainer.title")}</h2>
          <section className="map__yandex">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74099.63593886809!2d36.2676224!3d54.522675199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1662397395047!5m2!1sru!2sru"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </section>
          <section className="station">
            <div className="station__top">
              <div className="station__title_wrap">
                <h2 className="station__title_top">Hotel Petr</h2>
                <span className="station__count">4.5</span>
              </div>
              <span className="station__description">Приморский парк Победы, Крестовский проспект 21, г. Санкт-Петербург</span>
            </div>
            <div className="station__bottom">
              <h3 className="station__title_bottom">Доступные тарифы</h3>
              <div className="station__types_wrap">
                {
                  data?.map((el) => {
                    return (
                      <div key={el.id} className="type">
                        <img className="type__img" src={el.path} alt={el.title}/>
                        <div className="type__description_wrap">
                          <h5 className="type__title">{el.title}</h5>
                          <span className="type__characteristics">{el.characteristics}</span>
                          <span className="type__price">{el.cost}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default getScreenWidth(MapContainer);
