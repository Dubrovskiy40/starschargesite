import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PuzzleCardBig from "../PuzzleCardBig";
import PuzzleCardSmall from "../PuzzleCardSmall";
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
      {slidesData.map((slideData, index) => (
        <SwiperSlide key={Math.random() * index}>
          <PuzzleSlide
            slots={[
              <PuzzleCardBig {...slideData[0]} />,
              // --------------
              cardsView === 4 ? (
                <PuzzleCardBig {...slideData[1]} />
              ) : (
                <PuzzleCardSmall {...slideData[1]} />
              ),
              // ---------------
              <PuzzleCardSmall {...slideData[2]} />,
              <PuzzleCardSmall {...slideData[3]} />,
              <PuzzleCardSmall {...slideData[4]} />,
            ]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PuzzleSlider;
