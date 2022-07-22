import React from 'react';
import style from './agreement.module.scss';

const Agreement = ({ openModalWindow, isReadAgreement, setIsReadAgreement }) => {

    const handleOpen = () => {
        openModalWindow(prevState => !prevState);
        setIsReadAgreement(true)
    };

    return (
        <div className={style.agreement}>
            <label htmlFor="checkInp">
                <input id="checkInp" type="checkbox" readOnly checked={isReadAgreement ? true : false} />
                <span className={style.agreement__link} onClick={handleOpen}>Пользовательское соглашение</span>
            </label>
        </div>
    );
};

export default Agreement;