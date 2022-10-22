import React from 'react';

const StationHover = ( props ) => {
  const { elCoordinates, stations } = props;

  return (
    <>
      {
        stations?.map((station) => {
          return (
            <section key={station.stationId} className="stationHover" style={{ top: `${elCoordinates.x}px`, left: `${elCoordinates.y}px` }}>
              <div className="stationHover__top">
                <div className="stationHover__title_wrap">
                  <h2 className="stationHover__title_top">{station.name}</h2>
                  <span className="stationHover__count">{station.count}</span>
                </div>
                <span className="stationHover__description">{station.address}</span>
              </div>
              <div className="stationHover__bottom">
                <h3 className="stationHover__title_bottom">Доступные тарифы</h3>
                <div className="stationHover__types_wrap">
                  {
                    station.options?.map((option) => {
                      return (
                        <div key={option.optionId} className="stationHover__type">
                          <img className="stationHover__type_img" src={option.path} alt={option.optionTitle}/>
                          <div className="stationHover__type_description_wrap">
                            <h5 className="stationHover__type_title">{option.optionTitle}</h5>
                            <span className="stationHover__type_characteristics">{option.characteristics}</span>
                            <span className="stationHover__type_price">{option.cost}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
          )
        })
      }
    </>
  );
};

export default StationHover;
