import React from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const StationHover = (props) => {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  
  const { elCoordinates, dataMapHover } = props;

  return createPortal(
    <section
      className="stationHover"
      style={{
        top: `${Math.abs(elCoordinates.x) + 60}px`,
        left: `${Math.abs(elCoordinates.y) + 20}px`,
      }}
    >
      <div className="stationHover__top">
        <div className="stationHover__title_wrap">
          <h2 className="stationHover__title_top">
            {lang === 'ru'
              ? dataMapHover.name
              : dataMapHover.name_eng
            }
          </h2>
        </div>
        <span className="stationHover__description">
          {lang === 'ru'
            ? dataMapHover.description
            : dataMapHover.description_eng
          }
        </span>
      </div>
      {!dataMapHover.is_active && <span className="stationHover__info_show">Ремонт</span>}
  </section>, document.getElementById('modal'));
};

export default StationHover;
