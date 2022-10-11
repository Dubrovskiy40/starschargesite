import React from 'react';
import classnames from 'classnames';

const CmInput = ({isInput, id, name, type, value, placeholder, minLength, maxLength, required, isValid, onChange}) => {

  const inputClass = classnames(
    "inp__text",
    {
      inp__text_red: isValid === false,
    },
    {
      inp__text_green: isValid === true,
    }
  );

  const _onChange = (e) => {
    const newValue = e.currentTarget.value;
    onChange(newValue, name); // этот onChange в пропсах прилетает
  }

  return (
    <>
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
    </>
  );
};

export default CmInput;