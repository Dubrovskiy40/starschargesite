import React, { useMemo, useState } from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import Map from "../Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Station from "./Station/Station";
import { observer } from "mobx-react";
import StationHover from "./StationHover/StationHover";

const MapContainer = observer((props) => {
  const { widthScreen, deviceType, stations, apiKey } = props;
  const center = useMemo(
    () => ({
      lat: 55.754591881471676,
      lng: 37.57273282939941,
    }),
    []
  );
  const { t } = useTranslation();

  const [showInfoMapHover, setShowInfoMapHover] = useState(false);
  const [dataMapHover, setDataMapHover] = useState({});
  const [showInfoMapClick, setShowInfoMapClick] = useState(false);
  const [dataMapClick, setDataMapClick] = useState({});
  const [elCoordinates, setElCoordinates] = useState({
    x: "",
    y: "",
  }); // координаты инфо блока при наведении

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
                <>
                  <Map
                    center={center}
                    stations={stations}
                    setShowInfoMapHover={setShowInfoMapHover}
                    setDataMapHover={setDataMapHover}
                    setShowInfoMapClick={setShowInfoMapClick}
                    setDataMapClick={setDataMapClick}
                    setElCoordinates={setElCoordinates}
                    elCoordinates={elCoordinates}
                  />
                  {widthScreen >= 1190 && showInfoMapHover && (
                    <StationHover
                      dataMapHover={dataMapHover}
                      elCoordinates={elCoordinates}
                    />
                  )}
                </>
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </section>
        </div>
        {widthScreen < 1190 && showInfoMapClick && (
          <Station dataMapClick={dataMapClick} />
        )}
      </div>
    </section>
  );
});

export default getScreenWidth(MapContainer);
