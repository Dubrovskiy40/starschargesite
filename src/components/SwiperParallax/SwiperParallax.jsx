import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import staticStation from "../../assets/images/sliderParallax/station.png";
import firstSlide from "../../assets/images/sliderParallax/light.png";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const SwiperParallax = () => {
  const { t } = useTranslation();
  
  const arraySliders = [
    {
      id: "1",
      title: t("sliders.slider1.title"),
      text: t("sliders.slider1.description"),
      img: firstSlide,
    },
    {
      id: "2",
      title: t("sliders.slider2.title"),
      text: t("sliders.slider2.description"),
      img: firstSlide,
    },
    {
      id: "3",
      title: t("sliders.slider3.title"),
      text: t("sliders.slider3.description"),
      img: firstSlide,
    },
  ];

  return (
    <section id="Главная" className="container swiper-parallax">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
        modules={[Autoplay, Scrollbar, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {arraySliders?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="flex hero__descr">
                <div className="hero__title title" data-swiper-parallax="-300">
                  {slide.title}
                </div>
                <div className="hero__text" data-swiper-parallax="-100">
                  <p>{slide.text}</p>
                </div>
              </div>
              <div className="hero__img">
                <img
                  className="hero__img_puls"
                  src={slide.img}
                  alt="descrImg"
                ></img>
                <img
                  className="hero__animation"
                  src={staticStation}
                  alt="descrImg"
                ></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwiperParallax;
