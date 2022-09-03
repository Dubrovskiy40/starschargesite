import React, { useEffect, useState } from "react";
// import Card from "./Card/Card";
// import Pagination from "./Pagination/Pagination";
// import PropTypes from 'prop-types';
import { getScreenWidth } from "../../hoc/getScreenWidth";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import { useTranslation } from "react-i18next";
import '../../utils/i18next';

const Cards = (props) => {
  const { t } = useTranslation();

  const [countCard, setCountCard] = useState(4);

  const pagination = props.deviceType !== "mobile" && {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  useEffect(() => {
    if (props.deviceType === "desctop") { setCountCard(4) }
    if (props.deviceType === "tablet") { setCountCard(3) }
    if (props.deviceType === "mobile") { setCountCard(1) }
  }, [props.deviceType]);

  const handleAddCards = () => {
    console.log("загрузить еще карточки");
    if (props.cardsList.length > countCard) {
      setCountCard((prevState) => ++prevState);
    }
  };

  return (
    <section id={props.menuName} className="news">
      <div className="container">
        <Swiper
          // slidesPerView={countCard}
          spaceBetween={25}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          enabled={false}
          breakpoints={{
            0: {
              enabled: true,
              slidesPerView: 1,
              // direction: 'vertical'
            },
            768: {
              width: 768,
              enabled: true,
              slidesPerView: 4,
              direction: 'horizontal'
            },
            1190: {
              width: 1190,
              enabled: true,
              slidesPerView: 5,
              direction: 'horizontal'
            },
          }}
        >
          {props.cardsList?.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <div className="card">
                  <img className="card__img" src={`data:image/jpeg;base64,${card.img}`} alt="img" />
                  <div className="card__text_block">
                    <h3 className="card__title">{card.header}</h3>
                    <p className="card__text">{card.text}</p>
                    <div>
                      <span className="card__data">{card.date}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {props.deviceType === "mobile" && (
          <button className="cards__btn" type="button" onClick={handleAddCards}>
            Ещё новости
          </button>
        )}
      </div>
    </section>
  );
};

// Cards.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default getScreenWidth(Cards);
