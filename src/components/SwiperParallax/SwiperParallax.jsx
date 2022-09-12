import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import firstSlide from "../../assets/images/sliderParallax/group.png";
import secondSlide from "../../assets/images/sliderParallax/station.png";
import thirdSlide from "../../assets/images/sliderParallax/light.png";

const SwiperParallax = (props) => {
  const arraySliders = [
    {
      id: "1",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-1",
      text:
        "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
      img: firstSlide,
    },
    {
      id: "2",
      title: "Рыбный текст для проверки",
      subtitle: "Subtitle-2",
      text: "Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.",
      img: secondSlide,
    },
    {
      id: "3",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-3",
      text:
        "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
      img: thirdSlide,
    },
  ];

  return (
    <section id={props.menuName} className="container swiper-parallax">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
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
                <div className="hero__subtitle" data-swiper-parallax="-200">
                  {slide.subtitle}
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
