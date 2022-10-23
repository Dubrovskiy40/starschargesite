import React from "react";
import { createPortal } from "react-dom";

const StationHover = (props) => {
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
          <h2 className="stationHover__title_top">{dataMapHover.name}</h2>
          <span className="stationHover__count">{dataMapHover.count}</span>
        </div>
        <span className="stationHover__description">
                  {dataMapHover.address}
                </span>
      </div>
    <div className="stationHover__bottom">
      <h3 className="stationHover__title_bottom">Доступные тарифы</h3>
      <div className="stationHover__types_wrap">
        {dataMapHover.options?.map((option) => {
          return (
            <div key={option.optionId} className="stationHover__type">
              <img
                className="stationHover__type_img"
                src={option.path}
                alt={option.optionTitle}
              />
              <div className="stationHover__type_description_wrap">
                <h5 className="stationHover__type_title">
                  {option.optionTitle}
                </h5>
                <span className="stationHover__type_characteristics">
                          {option.characteristics}
                        </span>
                <span className="stationHover__type_price">
                          {option.cost}
                        </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>, document.getElementById('modal'));
};

export default StationHover;
