import CardForPuzzle from "./CardForPuzzle/CardForPuzzle";
import Style from "./puzzle.module.scss";
import { useState, useEffect } from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const getCards = (currentCard, visibleCards, cardsList) => {
  let content = [];
  for (
    let index = currentCard;
    index < /*currentCard +*/ visibleCards;
    index++
  ) {
    content.push(
      <div
        key={index}
        className={
          index === currentCard
            ? // || (index === currentCard + 1 && visibleCards === 5)
              Style.grid__firstCell
            : (index === currentCard + 1 && visibleCards === 6) ||
              ((index === 1 || index === 2 || index === 3 || index === 4) &&
                visibleCards === 7) ||
              (index === currentCard + 1 && visibleCards === 5) ||
              (index === currentCard + 1 && visibleCards === 3)
            ? Style.grid__secondCell
            : (index === currentCard + 2 && visibleCards === 5) ||
              (index === currentCard + 2 && visibleCards === 6)
            ? Style.grid__thirdCell
            : Style.grid__restCell
        }
      >
        <CardForPuzzle
          id={`c${index}`}
          imgPath={cardsList[index].img}
          title={`${cardsList[index].header}`}
          paragraph={cardsList[index].text}
          dataPublic={cardsList[index].date}
        />
      </div>
    );
  }
  return content;
};

const Puzzle = (props) => {
  const { t } = useTranslation();

  const { widthScreen, menuName, deviceType, cardsList } = props;
  const [currentCard, setcurrentCard] = useState(0);
  const [visibleCards, setCountCard] = useState(1);

  useEffect(() => {
    deviceType === "superdesctop"
      ? setCountCard(7)
      : deviceType === "desctop"
      ? setCountCard(5)
      : deviceType === "tablet"
      ? setCountCard(6)
      : setCountCard(3);
  }, [deviceType]);

  return (
    <>
      <section id={menuName} />
      <div className="container">
        <h2 className="title">{t("news.title")}</h2>
        <div className={Style.grid}>
          {getCards(
            currentCard,
            Math.min(visibleCards, cardsList.length),
            cardsList
          )}
        </div>
      </div>
    </>
  );
};

export default getScreenWidth(Puzzle);
