import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PuzzleCard from "../PuzzleCard";
import PuzzleSlide from "../PuzzleSlide";

const PuzzleSlider = ({ slidesData, cardsView }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} spaceBetween={50}>
      {slidesData.map((slideData) => (
        <SwiperSlide key={Math.random()}>
          <PuzzleSlide
            slots={[
              <PuzzleCard {...slideData[0]} />,
              // --------------
              cardsView === 4 ? (
                <PuzzleCard {...slideData[1]} />
              ) : (
                <PuzzleCard {...slideData[1]} small />
              ),
              // ---------------
              <PuzzleCard {...slideData[2]} small />,
              <PuzzleCard {...slideData[3]} small />,
              <PuzzleCard {...slideData[4]} small />,
            ]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PuzzleSlider;
