import React from "react";
import style from "./slider.module.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Carousel = () => {
  const arraySliders = [
    {
      id: "1",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-1",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
    {
      id: "2",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-2",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
    {
      id: "3",
      title: "Будущее уже наступило",
      subtitle: "Subtitle-3",
      text: "Найдите нужную станцию. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
    },
  ];

  return (
    <div className={style.carousel}>
      <h2> Single Item</h2>
      {/* <Slider {...settings}> */}
      {arraySliders.map((slide) => {
        return (
          <CarouselItem
            key={slide.id}
            title={slide.title}
            subtitle={slide.subtitle}
            text={slide.text}
          />
        );
      })}
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;
