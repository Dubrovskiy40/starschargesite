import { getScreenWidth } from "../../hoc/getScreenWidth";
import "swiper/scss";
import "swiper/scss/pagination";
import "./swiper.scss";
import { useTranslation } from "react-i18next";
import PuzzleSlider from "./PuzzleSlider";

const PuzzleDemo = ({ deviceType, data }) => {
  const { t } = useTranslation();

  const {
    name,
    sections: [{ cards }],
  } = data;

  const slidesData = [];

  const cardsView =
    deviceType === "mobile" ? 3 : deviceType === "tablet" ? 5 : 4;
  const slidesAmount = Math.ceil(cards.length / cardsView);

  for (let i = 0; i < slidesAmount; i++) {
    slidesData[i] = cards.slice(i * cardsView, cardsView + i * cardsView);
  }

  console.log(slidesData);

  return (
    <section id={name}>
      <div className="container">
        <h2 className="title">{t("news.title")}</h2>
        <PuzzleSlider slidesData={slidesData} cardsView={cardsView} />
      </div>
    </section>
  );
};

export default getScreenWidth(PuzzleDemo);
