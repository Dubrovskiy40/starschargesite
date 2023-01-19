import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imgPath, title, text, dataPublic }) => {

    return (
        <li className="card">
            <img className="card__img" src={imgPath} alt="img"/>
            <div className="card__text_block">
                <h3 className="card__title">
                    {title}
                </h3>
                <p className="card__text">
                    {text}
                </p>
                <div>
                    <span className="card__data">
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