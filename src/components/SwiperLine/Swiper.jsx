import { Swiper, SwiperSlide } from "swiper/react";
import Puzzle from "../Puzzle/Puzzle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyles.css";
import { Pagination, Navigation } from "swiper";

export default function SwiperLine(props) {
  return (
    <>
      <section id={props.menuName} />
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Puzzle />
        </SwiperSlide>

        <SwiperSlide>
          <Puzzle />
        </SwiperSlide>

        <SwiperSlide>
          <Puzzle />
        </SwiperSlide>

        <SwiperSlide>
          <Puzzle />
        </SwiperSlide>

        <SwiperSlide>
          <Puzzle />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
