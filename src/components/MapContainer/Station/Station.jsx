import React from "react";

const Station = ({ showInfoMapClick }) => {
  // const data = [
  //   {
  //     id: "1",
  //     path: "/images/map/type1.png",
  //     title: "CHAdeMO",
  //     characteristics: "50 кВт",
  //     cost: "70 Р/мин",
  //   },
  //   {
  //     id: "2",
  //     path: "/images/map/type2.png",
  //     title: "Yazaki (Type 1)",
  //     characteristics: "23 кВт",
  //     cost: "70 Р/мин",
  //   },
  //   {
  //     id: "3",
  //     path: "/images/map/type3.png",
  //     title: "Mennekes (Type 2)",
  //     characteristics: "23 кВт",
  //     cost: "50 Р/мин",
  //   },
  // ];

  return (
    <section className="station">
      <div className="station__top">
        <div className="station__title_wrap">
          <h2 className="station__title_top">{showInfoMapClick.st.name}</h2>
          <span className="station__count">4.5</span>
        </div>
        <span className="station__description">
          Приморский парк Победы, Крестовский проспект 21, г. Санкт-Петербург
        </span>
      </div>
      <div className="station__bottom">
        <h3 className="station__title_bottom">Доступные тарифы</h3>
        <div className="station__types_wrap">
          {/*{data?.map((el) => {*/}
          {/*  return (*/}
          {/*    <div key={el.id} className="type">*/}
          {/*      <img className="type__img" src={el.path} alt={el.title} />*/}
          {/*      <div className="type__description_wrap">*/}
          {/*        <h5 className="type__title">{el.title}</h5>*/}
          {/*        <span className="type__characteristics">*/}
          {/*          {el.characteristics}*/}
          {/*        </span>*/}
          {/*        <span className="type__price">{el.cost}</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </div>
    </section>
  );
};

export default Station;

