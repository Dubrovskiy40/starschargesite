import React from 'react';

const StationHover = ({ elCoordinates }) => {
  const data = [
    {id: '1', path: '/images/map/type1.png', title: 'CHAdeMO', characteristics: '50 кВт', cost: '70 Р/мин'},
    {id: '2', path: '/images/map/type2.png', title: 'Yazaki (Type 1)', characteristics: '23 кВт', cost: '70 Р/мин'},
    {id: '3', path: '/images/map/type3.png', title: 'Mennekes (Type 2)', characteristics: '23 кВт', cost: '50 Р/мин'},
  ];

  return (
    <section className="stationHover" style={{ top: `${elCoordinates.x}px`, left: `${elCoordinates.y}px` }}>
      <div className="stationHover__top">
        <div className="stationHover__title_wrap">
          <h2 className="stationHover__title_top">Hotel Petr</h2>
          <span className="stationHover__count">4.5</span>
        </div>
        <span className="stationHover__description">Приморский парк Победы, Крестовский проспект 21, г. Санкт-Петербург</span>
      </div>
      <div className="stationHover__bottom">
        <h3 className="stationHover__title_bottom">Доступные тарифы</h3>
        <div className="stationHover__types_wrap">
          {
            data?.map((el) => {
              return (
                <div key={el.id} className="stationHover__type">
                  <img className="stationHover__type_img" src={el.path} alt={el.title}/>
                  <div className="stationHover__type_description_wrap">
                    <h5 className="stationHover__type_title">{el.title}</h5>
                    <span className="stationHover__type_characteristics">{el.characteristics}</span>
                    <span className="stationHover__type_price">{el.cost}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default StationHover;
