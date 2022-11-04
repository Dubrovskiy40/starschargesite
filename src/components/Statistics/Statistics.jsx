import React from "react";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import { observer } from "mobx-react";

const Statistics = observer((props) => {
  const { stationsCount, statistics } = props;
  const { t } = useTranslation();

  const data = [
    { type: "station", value: stationsCount },
    { type: "user", value: statistics.users },
    { type: "review", value: statistics.feedbacks },
  ];

  console.log(statistics);

  const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 && value < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };

  const stationArr = [
    t("statistics.station.type1"),
    t("statistics.station.type2"),
    t("statistics.station.type3"),
  ];
  const station = numWord(data[0].value, stationArr);

  const userArr = [
    t("statistics.user.type1"),
    t("statistics.user.type2"),
    t("statistics.user.type3"),
  ];
  const user = numWord(data[1].value, userArr);

  const reviewArr = [
    t("statistics.review.type1"),
    t("statistics.review.type2"),
    t("statistics.review.type3"),
  ];
  const review = numWord(data[2].value, reviewArr);

  return (
    <section className="statistics">
      <div className="container">
        <ul className="statistics__list">
          <StatisticsItem
            title={stationsCount || 100}
            text={`${station} ${t("statistics.station.desc")}`}
          />
          <StatisticsItem title={statistics.users || 100000} text={user} />
          <StatisticsItem
            title={statistics.feedbacks || 1000000}
            text={review}
          />
        </ul>
      </div>
    </section>
  );
});

export default Statistics;
