import React from 'react';
import style from './loader.module.scss';
import loaderImg from '../../assets/images/loader/Loader.svg';

const Loader = () => {
    return (
        <div className={style.loader}>
            <img className={style.loader__img} src={loaderImg} alt="loader"/>
        </div>
    );
};

export default Loader;