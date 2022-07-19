import React from 'react';
import style from '../cards.module.scss';
import PropTypes from 'prop-types';

const Card = ({ imgPath, title, text, dataPublic }) => {

    return (
        <li className={style.card}>
            <img className={style.card__img} src={imgPath} alt="img"/>
            <div className={style.card__text_block}>
                <h3 className={style.card__title}>
                    {title}
                </h3>
                <p className={style.card__text}>
                    {text}
                </p>
                <div>
                    <span className={style.card__data}>
                        {dataPublic}
                    </span>
                </div>
            </div>
        </li>
    );
};

Card.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dataPublic: PropTypes.string.isRequired,
}

export default Card;