import React from "react";
import style from "../cards.module.scss";
import PropTypes from "prop-types";

const Pagination = ({ currentCard, allCards, handleLeft, handleRight }) => {
  return (
    <div className={style.pagination}>
      <button
        className={`${style.pagination__btn} ${style.pagination__btn_prev}`}
        onClick={handleLeft}
      >
        <svg
          className={style.pagination__arrow}
          width="30"
          height="52"
          viewBox="0 0 30 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 46L4 26L24 6"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className={style.pagination__count}>
        {currentCard} / {allCards}
      </span>
      <button
        className={`${style.pagination__btn} ${style.pagination__btn_next}`}
        onClick={handleRight}
      >
        <svg
          className={style.pagination__arrow}
          width="30"
          height="52"
          viewBox="0 0 30 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L26 26L6 46"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentCard: PropTypes.number.isRequired,
  allCards: PropTypes.number.isRequired,
  handleLeft: PropTypes.object.isRequired,
  handleRight: PropTypes.object.isRequired,
};

export default Pagination;
