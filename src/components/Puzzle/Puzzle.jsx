import CardForPuzzle from "./CardForPuzzle/CardForPuzzle";
import Style from "./puzzle.module.scss";
import { useState, useEffect } from "react";

const getCards = (currentCard, visibleCards, cardsList) => {
  let content = [];
  for (let index = currentCard; index < currentCard + visibleCards; index++) {
    content.push(
      <div
        className={
          index === currentCard
            ? Style.grid__firstCell
            : index === currentCard + 1 && visibleCards === 4
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
      ? setCountCard(4)
      : props.deviceType === "tablet"
      ? setCountCard(5)
      : props.deviceType === "superdesctop"
      ? setCountCard(8)
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
        <button
          onClick={() =>
            currentCard === 0
              ? setcurrentCard(currentCard)
              : setcurrentCard(currentCard - 1)
          }
          className={Style.button}
        >
          &lt;
        </button>

        <button
          onClick={() =>
            currentCard === props.cardsList.length - visibleCards
              ? setcurrentCard(currentCard)
              : setcurrentCard(currentCard + 1)
          }
          className={Style.button}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Puzzle;
