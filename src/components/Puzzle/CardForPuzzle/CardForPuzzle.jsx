import Style from "./cards.module.scss"
import PropTypes from 'prop-types';

const CardForPuzzle = ({ id, imgPath, title, paragraph, dataPublic }) => {

    return (
        <li key={id} className={Style.card} >
            <img className={Style.card__img} src={imgPath} alt="img" />
            <div className={Style.card__text_block}>
                <h3 className={Style.card__title}>
                    {title}
                </h3>
                <p className={Style.card__paragraph}>
                    {paragraph}
                </p> 
                <span className={Style.card__data}>
                    {dataPublic}
                </span>
            </div>
        </li>
    );
};

CardForPuzzle.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dataPublic: PropTypes.string.isRequired,
}

export default CardForPuzzle;