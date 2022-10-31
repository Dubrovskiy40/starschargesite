import React from 'react';
import PropTypes from 'prop-types';

export const CmError = (props) => {
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