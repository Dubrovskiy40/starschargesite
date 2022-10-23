import React, {useMemo, useState} from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import Map from "../Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Station from "./Station/Station";
import StationHover from "./StationHover/StationHover";
import { observer } from "mobx-react";

const center = {
  lat: 55.75,
  lng: 37.63,
  // lat: 37.57273282939941,
  // lng: 55.754591881471676,
};

const stations = [
  {
    stationId: "1",
    name: "Hotel Petr",
    address:
      "Приморский парк Победы, Крестовский проспект 21, г. Санкт-Петербург",
    options: [
      {
        optionId: "1",
        path: "/images/map/type1.png",
        optionTitle: "CHAdeMO",
        characteristics: "50 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "2",
        path: "/images/map/type2.png",
        optionTitle: "Yazaki (Type 1)",
        characteristics: "23 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "3",
        path: "/images/map/type3.png",
        optionTitle: "Mennekes (Type 2)",
        characteristics: "23 кВт",
        cost: "50 Р/мин",
      },
    ],
    count: "4.5",
    lat: 55.75,
    lng: 37.63,
  },
  {
    stationId: "2",
    name: "St. Vgik",
    address: "Бункер, Кр. площадь 1, г. Москва",
    options: [
      {
        optionId: "1",
        path: "/images/map/type1.png",
        optionTitle: "CHAdeMO",
        characteristics: "50 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "2",
        path: "/images/map/type2.png",
        optionTitle: "Yazaki (Type 1)",
        characteristics: "23 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "3",
        path: "/images/map/type3.png",
        optionTitle: "Mennekes (Type 2)",
        characteristics: "23 кВт",
        cost: "50 Р/мин",
      },
    ],
    count: "4.9",
    lat: 55.76,
    lng: 37.672,
  },
  {
    stationId: "3",
    name: "Hogvards",
    address: "Сразу за углом, Поворотный пр. 13, г. Круговой",
    options: [
      {
        optionId: "1",
        path: "/images/map/type1.png",
        optionTitle: "CHAdeMO",
        characteristics: "50 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "2",
        path: "/images/map/type2.png",
        optionTitle: "Yazaki (Type 1)",
        characteristics: "23 кВт",
        cost: "70 Р/мин",
      },
      {
        optionId: "3",
        path: "/images/map/type3.png",
        optionTitle: "Mennekes (Type 2)",
        characteristics: "23 кВт",
        cost: "50 Р/мин",
      },
    ],
    count: "4.1",
    lat: 55.753,
    lng: 37.6,
  },
];

const MapContainer = observer((props) => {
  // const center = useMemo(() => ({
    // lat: 37.57273282939941,
    // lng: 55.754591881471676,
  // }), []);
  const { widthScreen, deviceType, apiKey } = props;
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
          <Station
            dataMapClick={dataMapClick} 
          />
        )}
      </div>
    </section>
  );
});

export default getScreenWidth(MapContainer);
