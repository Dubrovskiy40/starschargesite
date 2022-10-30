import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PuzzleSlide from "./PuzzleSlide";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import PuzzleCardBig from "./PuzzleCardBig";
import PuzzleCardSmall from "./PuzzleCardSmall";
import { memo } from "react";
import styles from "./styles.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "./swiper.scss";
import { useTranslation } from "react-i18next";

const PuzzleDemo = ({ deviceType, menuName, cards }) => {
  const { t } = useTranslation();
  
  const slidesData = [];

  const cardsView =
    deviceType === "mobile" ? 3 : deviceType === "tablet" ? 5 : 4;
  const slidesAmount = Math.ceil(cards.length / cardsView);

  for (let i = 0; i < slidesAmount; i++) {
    slidesData[i] = cards.slice(i * cardsView, cardsView + i * cardsView);
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <section id={menuName}>
      <div className="container">
        <h2 className="title">{t("news.title")}</h2>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={50}
        >
          {slidesData.map((slideData) => (
            <SwiperSlide>
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
      </div>
    </section>
  );
};

export default getScreenWidth(memo(PuzzleDemo));
