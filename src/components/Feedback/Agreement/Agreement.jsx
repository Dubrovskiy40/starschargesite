import React from 'react';

import { useTranslation } from "react-i18next";
import '../../../utils/i18next';

const Agreement = ({ openModalWindow, isReadAgreement, setIsReadAgreement }) => {
    const { t } = useTranslation();

    const handleOpen = () => {
        openModalWindow(prevState => !prevState);
        setIsReadAgreement(true)
    };

    return (
        <div className="agreement">
            <label className="agreement__check">
                <input className="agreement__inp" type="checkbox" readOnly checked={isReadAgreement ? true : false} />
                <span className="agreement__link" onClick={handleOpen}>{t("feedback.termsOfUse")}</span>
            </label>
        </div>
    );
};

export default Agreement;