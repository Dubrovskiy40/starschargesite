import React from 'react';
import style from './cmInput.module.scss';
import classnames from 'classnames';

const CmInput = ({ isInput, id, name, type, value, placeholder, minLength, maxLength, required, isValid, onChange }) => {

    const inputClass = classnames(
        [style.input__text],
        {
            [style.text_red]:  isValid === false,
        },
        {
            [style.text_green]:  isValid === true,
        }
    );

    const _onChange = (e) => {
        const newValue = e.currentTarget.value;
        onChange(newValue, name); // этот onChange в пропсах прилетает
    }

    return (
        <div>
            {
                isInput
                    ? <input className={inputClass}
                             id={id}
                             name={name}
                             type={type}
                             value={value}
                             placeholder={placeholder}
                             minLength={minLength}
                             maxLength={maxLength}
                             required={required}
                             onChange={_onChange}
                    />
                    : <textarea className={inputClass}
                                id={id}
                                name={name}
                                value={value}
                                placeholder={placeholder}
                                rows="5"
                                cols="30"
                                minLength={minLength}
                                maxLength={maxLength}
                                required={required}
                                onChange={_onChange}
                    />
            }

        </div>
    );
};

export default CmInput;