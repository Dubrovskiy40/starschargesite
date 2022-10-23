import React from "react";

const Station = ({ dataMapClick }) => {

  return (
    <section className="station">
      <div className="station__top">
        <div className="station__title_wrap">
          <h2 className="station__title_top">{dataMapClick.name}</h2>
          <span className="station__count">{dataMapClick.count}</span>
        </div>
        <span className="station__description">
          {dataMapClick.address}
        </span>
      </div>
      <div className="station__bottom">
        <h3 className="station__title_bottom">Доступные тарифы</h3>
        <div className="station__types_wrap">
          {dataMapClick.options?.map((el) => {
            return (
              <div key={el.optionId} className="type">
                <img className="type__img" src={el.path} alt={el.optionTitle} />
                <div className="type__description_wrap">
                  <h5 className="type__title">{el.optionId}</h5>
                  <span className="type__characteristics">
                    {el.characteristics}
                  </span>
                  <span className="type__price">{el.cost}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Station;

