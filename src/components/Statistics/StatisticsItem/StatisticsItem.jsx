import Counter from "../../Counter";

const StatisticsItem = ({ title, text }) => {
  console.log(title);

  return (
    <li className="statistics__item">
      <div className="statistics__img_wrap">
        <svg
          className="statistics__img"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0173 40.2248L40.7759 58.9837L68.893 30.8661C79.5353 20.2236 79.411 9.58116 78.7485 5.02602C78.6547 4.32313 78.3322 3.67063 77.8308 3.16921C77.3294 2.66779 76.6769 2.34531 75.974 2.25153C71.419 1.58896 60.7767 1.46473 50.1345 12.1072L22.0173 40.2248ZM22.0173 40.2248L4.66673 36.746C4.07848 36.629 3.53302 36.3546 3.08855 35.9519C2.64407 35.5492 2.31725 35.0334 2.14296 34.4595C1.96867 33.8856 1.95345 33.2751 2.09892 32.6933C2.24438 32.1114 2.54509 31.5799 2.96894 31.1556L16.3856 17.7801C16.9973 17.1559 17.8308 16.7987 18.7046 16.7862H45.4552M64.2135 35.5441V62.2951C64.2011 63.1689 63.8439 64.0025 63.2197 64.6141L49.8444 78.031C49.4201 78.4549 48.8886 78.7556 48.3068 78.9011C47.7249 79.0466 47.1145 79.0313 46.5406 78.857C45.9667 78.6827 45.4509 78.3559 45.0482 77.9114C44.6455 77.4669 44.3711 76.9215 44.2541 76.3332L40.7757 58.9823M25.2885 66.8927C19.0357 77.7008 3.30004 77.7008 3.30004 77.7008C3.30004 77.7008 3.30004 61.9649 14.1079 55.7119"
            stroke="#60AD5E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="statistics__description">
        <span className="statistics__title">
          <Counter maxNumber={parseInt(title)} />
        </span>
        <span className="statistics__text">{text}</span>
      </div>
    </li>
  );
};

export default StatisticsItem;
