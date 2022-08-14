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

  const data = [
    {
      id: "1",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title1"),
      text: t("cards.data.text1"),
      dataPublic: "16.07.2022",
      cardPath: "",
    },
    {
      id: "2",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title2"),
      text: t("cards.data.text2"),
      dataPublic: "17.07.2022",
      cardPath: "",
    },
    {
      id: "3",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title3"),
      text: t("cards.data.text3"),
      dataPublic: "18.07.2022",
      cardPath: "",
    },
    {
      id: "4",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title4"),
      text: t("cards.data.text4"),
      dataPublic: "19.07.2022",
      cardPath: "",
    },
    {
      id: "5",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title5"),
      text: t("cards.data.text5"),
      dataPublic: "20.07.2022",
      cardPath: "",
    },
    {
      id: "6",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title6"),
      text: t("cards.data.text6"),
      dataPublic: "21.07.2022",
      cardPath: "",
    },
    {
      id: "7",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title7"),
      text: t("cards.data.text7"),
      dataPublic: "22.07.2022",
      cardPath: "",
    },
    {
      id: "8",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title8"),
      text: t("cards.data.text8"),
      dataPublic: "23.07.2022",
      cardPath: "",
    },
    {
      id: "9",
      imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
      title: t("cards.data.title9"),
      text: t("cards.data.text9"),
      dataPublic: "24.07.2022",
      cardPath: "",
    },
  ];

  const [countCard, setCountCard] = useState(4);
  // const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  // const [deviceType, setDeviceType] = useState("desctop"); //desctop, tablet, mobile

  const pagination = props.deviceType !== "mobile" && {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // const updateDimensions = () => {
  //   setWidthScreen(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   // console.log('widthScreen',widthScreen);
  //
  //   if (widthScreen > 1190) {
  //     setCountCard(4);
  //     setDeviceType("desctop");
  //   }
  //   if (widthScreen > 768 && widthScreen <= 1190) {
  //     setCountCard(3);
  //     setDeviceType("tablet");
  //   }
  //   if (widthScreen <= 768) {
  //     setCountCard(1);
  //     setDeviceType("mobile");
  //   }
  //
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  useEffect(() => {
    props.deviceType === "desctop"
      ? setCountCard(4)
      : props.deviceType === "tablet"
      ? setCountCard(3)
      : setCountCard(1);
  }, []);

  const handleAddCards = () => {
    console.log("загрузить еще карточки");
    // if (data.length > countCard) {
    //   setCountCard((prevState) => ++prevState);
    // }
  };

  return (
    <section id={props.menuName} className="news">
      <div className="container">
        <Swiper
          slidesPerView={countCard}
          spaceBetween={25}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          enabled={false}
          breakpoints={{
            1190: {
              width: 1190,
              enabled: true,
            },
            768: {
              width: 768,
              enabled: true,
            },
          }}
        >
          {data?.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <div className="card">
                  <img className="card__img" src={card.imgPath} alt="img" />
                  <div className="card__text_block">
                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__text">{card.text}</p>
                    <div>
                      <span className="card__data">{card.dataPublic}</span>
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
