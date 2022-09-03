import React from 'react';
import PropTypes from 'prop-types';
import style from './_CmError.scss';

import { useTranslation } from "react-i18next";
import '../../../utils/i18next';
import { Trans } from 'react-i18next'; // особые ключи для перевода

export const CmError = (props) => {
    const { t } = useTranslation();

    const {error} = props;

    return (
        <div>
            {!!error && (
                <span className="error__text">
                    {`${error}`}
                </span>
            )}
        </div>
    );
};

CmError.propTypes = {
    error: PropTypes.string,
};

CmError.defaultProps = {
    error: '',
};