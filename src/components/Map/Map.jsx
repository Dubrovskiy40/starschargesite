import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import styles from "./Map.module.scss";
import { options } from "./options";

const Map = (props) => {
  const {
    center,
    stations,
    setShowInfoMapHover,
    setDataMapHover,
    setShowInfoMapClick,
    setDataMapClick,
    setElCoordinates,
  } = props;

  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  const handleClickPointMap = (e) => {
    setShowInfoMapClick((prev) => !prev);
  };

  const getCoordinates = (elem) => {
    const box = elem.getBoundingClientRect();
    return {
      x: box.top + window.pageYOffset,
      y: box.left + window.pageXOffset,
    };
  };

  return (
    <div className={styles.container}>
      <GoogleMap
        className=""
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {stations?.map((station) => (
          <Marker
            onClick={handleClickPointMap}
            key={station.id}
            onMouseOver={(e) => {
              const { x, y } = getCoordinates(e.domEvent.target);
              setShowInfoMapHover((prev) => !prev);
              setDataMapClick(station);
              setDataMapHover(station);
              setElCoordinates((prev) => ({ ...prev, x, y }));
            }}
            onMouseOut={() => {
              setShowInfoMapHover((prev) => !prev);
            }}
            position={{
              lat: station.lat,
              lng: station.lng,
            }}
            icon={{
              path: "M23.1658 0C10.3717 0 0 10.3717 0 23.1658C0 35.96 16.2343 66.0316 23.1658 66.0316C30.4622 66.0316 46.3315 35.96 46.3315 23.1658C46.3315 10.3717 35.96 0 23.1658 0ZM23.1658 37.6338C15.1749 37.6338 8.69729 31.156 8.69729 23.1658C8.69729 15.1756 15.1749 8.69801 23.1658 8.69801C31.1567 8.69801 37.6345 15.1756 37.6345 23.1659C37.6345 31.1563 31.1567 37.6338 23.1658 37.6338Z M26.858 14.0469H20.2694L16.5044 25.3418H22.1518V32.8717L31.5642 20.6356H24.9756L26.858 14.0469Z",
              fillColor: station.is_active ? "#60AD5E" : "rgb(138, 138, 138)",
              fillOpacity: 1,
              scale: 0.8,
              strokeColor: station.is_active ? "#60AD5E" : "rgb(138, 138, 138)",
              strokeWeight: 0.5,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
