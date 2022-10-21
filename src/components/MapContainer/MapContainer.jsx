import React, { useEffect, useState } from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { setI18n, useTranslation } from "react-i18next";
import "../../utils/i18next";
import { observer } from "mobx-react";
import Map from "../Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 55.75,
  lng: 37.63,
};

const stations = [
  { lat: 55.75, lng: 37.63 },
  { lat: 55.765, lng: 37.636 },
  { lat: 55.76, lng: 37.672 },
  { lat: 55.753, lng: 37.6 },
];

const MapContainer = observer((props) => {
  const { widthScreen, deviceType, apiKey } = props;
  const { t } = useTranslation();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return (
    <section id="Станции" className="map">
      <div className="container">
        <div className="map__main">
          <h2 className="map__title title">{t("mapContainer.title")}</h2>
          <section className="map__google">
            <div className="map-frame" id="map">
              {isLoaded ? (
                <Map center={center} stations={stations} />
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
});

export default getScreenWidth(MapContainer);
