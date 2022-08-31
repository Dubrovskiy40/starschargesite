import React from 'react';
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = () => {
//добавить изменение окончания текста при изменении значения
  return (
    <section className="statistics">
        <div className="container">
          <ul className="statistics__list">
            <StatisticsItem title="123" text="Станций зарядки" />
            <StatisticsItem title="24000+" text="Пользователя" />
            <StatisticsItem title="1200" text="Отзывов" />
          </ul>
        </div>
    </section>
  );
};

export default Statistics;
