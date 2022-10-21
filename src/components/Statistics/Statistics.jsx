import React from "react";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = () => {
  const data = [
    { type: "station", value: 123 },
    { type: "user", value: 24000 },
    { type: "review", value: 1200 },
  ];

  const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 && value < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };

  const stationArr = ["Станция", "Станции", "Станций"];
  const station = numWord(data[0].value, stationArr);

  const userArr = ["Пользователь", "Пользователя", "Пользователей"];
  const user = numWord(data[1].value, userArr);

  const reviewArr = ["Отзыв", "Отзыва", "Отзывов"];
  const review = numWord(data[2].value, reviewArr);

  return (
    <section className="statistics">
      <div className="container">
        <ul className="statistics__list">
          <StatisticsItem title={data[0].value} text={`${station} зарядки`} />
          <StatisticsItem title={`${data[1].value}+`} text={user} />
          <StatisticsItem title={data[2].value} text={review} />
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
