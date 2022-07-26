import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import bgiImg from '../../assets/images/sliderParallax/fon.jpg';

const SwiperParallax = () => {
  const arraySliders = [
    {
      id: "1",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-1",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
    {
      id: "2",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-2",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
    {
      id: "3",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-3",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " +
        "Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
  ];

  return (
    <section className="swiper-parallax">
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
          style={{
            "background-image":
              `url(${bgiImg})`,
            "backgroundRepeat": "no-repeat",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {
          arraySliders?.map((slide) => {
            return (
              <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                  {slide.title}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {slide.subtitle}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    {slide.text}
                  </p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default SwiperParallax;