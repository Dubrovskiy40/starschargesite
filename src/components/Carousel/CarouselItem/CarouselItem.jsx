import React from "react";
import style from "../slider.module.scss";

const Slide = ({ title, subtitle, text }) => {

    return (
        <section className={style.carousel__slide_block}>
            <div className={style.carousel__title}>
                {title}
            </div>
            <div className={style.carousel__subtitle}>
                {subtitle}
            </div>
            <div className={style.carousel__text}>
                <p>
                    {text}
                </p>
            </div>
        </section>
    );
};

export default Slide;