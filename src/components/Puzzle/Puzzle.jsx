import CardForPuzzle from "./CardForPuzzle/CardForPuzzle";
import Style from "./puzzle.module.scss";
import { useState, useEffect } from "react";
import { getScreenWidth } from "../../hoc/getScreenWidth";

const getCards = (currentCard, visibleCards, cardsList) => {
  let content = [];
  for (let index = currentCard; index < currentCard + visibleCards; index++) {
    content.push(
      <div
        className={
          index === currentCard ||
          (index === currentCard + 1 && visibleCards === 5)
            ? Style.grid__firstCell
            : (index === currentCard + 1 && visibleCards === 4) ||
              ((index === 1 || index === 2 || index === 3 || index === 4) &&
                visibleCards === 7) ||
              (index === 2 && visibleCards === 5) ||
              (index === 2 && visibleCards === 3)
            ? Style.grid__secondCell
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
  const [currentCard, setcurrentCard] = useState(0);
  const [visibleCards, setCountCard] = useState(1);
  useEffect(() => {
    props.deviceType === "desctop"
      ? setCountCard(5)
      : props.deviceType === "tablet"
      ? setCountCard(4)
      : props.deviceType === "superdesctop"
      ? setCountCard(7)
      : setCountCard(3);
  }, [props.deviceType]);

  return (
    <>
      <section id={props.menuName} />
      <div className="container">
        <h2 className="title">Новости</h2>
        <div className={Style.grid}>
          {getCards(
            currentCard,
            Math.min(visibleCards, props.cardsList.length),
            props.cardsList
          )}
        </div>
      </div>
    </>
  );
};

export default getScreenWidth(Puzzle);
