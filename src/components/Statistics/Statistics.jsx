import React from "react";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";

const Statistics = (props) => {
  const {stationsCount} = props;
  
  const { t } = useTranslation();
  
  const data = [
    { type: "station", value: stationsCount },
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

  const stationArr = [t("statistics.station.type1"), t("statistics.station.type2"), t("statistics.station.type3")];
  const station = numWord(data[0].value, stationArr);

  const userArr = [t("statistics.user.type1"), t("statistics.user.type2"), t("statistics.user.type3")];
  const user = numWord(data[1].value, userArr);

  const reviewArr = [t("statistics.review.type1"), t("statistics.review.type2"), t("statistics.review.type3")];
  const review = numWord(data[2].value, reviewArr);

  return (
    <section className="statistics">
      <div className="container">
        <ul className="statistics__list">
          <StatisticsItem title={data[0].value} text={`${station} ${t("statistics.station.desc")}`} />
          <StatisticsItem title={`${data[1].value}+`} text={user} />
          <StatisticsItem title={data[2].value} text={review} />
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
