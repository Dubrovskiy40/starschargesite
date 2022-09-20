import React, {useEffect, useState} from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
// import Station from "./Station/Station";

const MapContainer = (props) => {
  const { t } = useTranslation();

  const { widthScreen, deviceType} = props;

  return (
    <section id="Станции" className="map">
      <div className="container">
        <div className="map__main">
          <h2 className="map__title title">{t("mapContainer.title")}</h2>
          <section className="map__google">
              <div className="map-frame" id="map">
                <iframe
                  title="map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74099.63593886809!2d36.2676224!3d54.522675199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1662397395047!5m2!1sru!2sru"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </section>
          {/*<Station />*/}
        </div>
      </div>
    </section>
  );
};

export default getScreenWidth(MapContainer);
