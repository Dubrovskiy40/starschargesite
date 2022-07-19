import React from 'react';
import style from './successMessage.module.scss';

const SuccessMessage = ({ successfullySent, showSuccessBlock }) => {

    return (
        <div className={`${style.successMessage} ${showSuccessBlock  ? style.successMessage_show : style.successMessage_hide}`}>
            <div
                className={`${style.successMessage__block} ${successfullySent ? style.successMessage__block_green : style.successMessage__block_red}`}>
                {successfullySent ? 'Форма успешно отправлена.' : 'Форма не отправлена. Устраните ошибки и повторите отправку.'}
            </div>
        </div>
    );
};

export default SuccessMessage;