import React from 'react';
import style from './agreement.module.scss';

import { useTranslation } from "react-i18next";
import '../../../utils/i18next';

const Agreement = ({ openModalWindow, isReadAgreement, setIsReadAgreement }) => {
    const { t } = useTranslation();

    const handleOpen = () => {
        openModalWindow(prevState => !prevState);
        setIsReadAgreement(true)
    };

    return (
        <div className={style.agreement}>
            <label htmlFor="checkInp">
                <input id="checkInp" type="checkbox" readOnly checked={isReadAgreement ? true : false} />
                <span className={style.agreement__link} onClick={handleOpen}>{t("feedback.termsOfUse")}</span>
            </label>
        </div>
    );
};

export default Agreement;