import { useState } from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#60AD5E" : "#60AD5E",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    border: "1px solid #60AD5E",
  },
}));

const MapContainer = (props) => {
  const { t } = useTranslation();

  const [moveMap, setMoveMap] = useState(false);

  // let heighthMap;
  //
  //   props.deviceType === "desctop"
  //     ? heighthMap = "450px"
  //     : props.deviceType === "tablet"
  //       ? heighthMap = "600px"
  //       : heighthMap = "800px"
  //
  //   console.log('heighthMap',heighthMap)

  const handleMuveMap = () => {
    console.log("moveMap", moveMap);
    setMoveMap((prevState) => !prevState);
  };

  const handleDoubleClick = () => {
    console.log("doubleClick");
  };

  return (
    <section id={props.menuName} className="map">
      <div className="container">
        <div className="map__main">
          <h2 className="map__title">{t("mapContainer.title")}</h2>
          <span className="map__subtitle">Двигать карту</span>
          <FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography className="map__lable" htmlFor="radio">
                выкл
              </Typography>
              <AntSwitch
                id="radio"
                onClick={handleMuveMap}
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>вкл</Typography>
            </Stack>
          </FormGroup>
          <section className="map__yandex">
            <div className="map-frame" onDoubleClick={handleDoubleClick}>
              <iframe
                style={{ pointerEvents: `${moveMap ? "auto" : "none"}` }}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5919a4499abe294201804f138c5c39eb9519b5e6b5fd791b20adf349051d6dc3&amp;source=constructor"
                width="100%"
                height="500px"
                frameBorder="0"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default getScreenWidth(MapContainer);
