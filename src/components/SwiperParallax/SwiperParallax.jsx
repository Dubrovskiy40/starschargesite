import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/scss";
import "swiper/scss/scrollbar";

import firstSlide from "../../assets/images/sliderParallax/group.png";
import secondSlide from "../../assets/images/sliderParallax/station.png";
import thirdSlide from "../../assets/images/sliderParallax/light.png";

const SwiperParallax = (props) => {
  const arraySliders = [
    {
      id: "1",
      title: "Будущее уже наступило",
      text:
        "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
      img: firstSlide,
    },
    {
      id: "2",
      title: "Рыбный текст для проверки",
      text: "Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.",
      img: secondSlide,
    },
    {
      id: "3",
      title: "Будущее уже наступило",
      text:
        "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
      img: thirdSlide,
    },
  ];

  return (
    <section id={props.menuName} className="container swiper-parallax">
      <Swiper
        scrollbar={{
          draggable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {arraySliders?.map((slide) => {
          return (
            <SwiperSlide>
              <div className="flex hero__descr">
                <div className="hero__title title" data-swiper-parallax="-300">
                  {slide.title}
                </div>
                <div className="hero__text" data-swiper-parallax="-100">
                  <p>{slide.text}</p>
                </div>
              </div>
              <img src={slide.img} alt="descrImg"></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwiperParallax;
