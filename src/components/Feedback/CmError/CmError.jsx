import React from 'react';
import PropTypes from 'prop-types';
import style from './cmError.module.scss';

export const CmError = (props) => {
    const {error} = props;
    console.log('error:',error)
    return (
        <div>
            {!!error && (
                <span className={style.error__text}>
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