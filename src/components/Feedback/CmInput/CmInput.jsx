import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import classnames from 'classnames';
import style from './cmInput.module.scss';

const CmInput = ({isInput, id, name, type, value, placeholder, minLength, maxLength, required, isValid, onChange}) => {

  const inputClass = classnames(
    [style.inp__text],
    {
      [style.inp__text_red]: isValid === false,
    },
    {
      [style.inp__text_green]: isValid === true,
    }
  );

  const _onChange = (e) => {
    const newValue = e.currentTarget.value;
    onChange(newValue, name); // этот onChange в пропсах прилетает
  }

  return (
    <div className={style.inp__block}>
      {
        isInput
          ? type === 'tel'
            ? <PhoneInput className={inputClass}
                          id={id}
                          name={name}
                          value={value}
                          placeholder={placeholder}
                          minLength={minLength}
                          maxLength={maxLength}
                          required={required}
                          onChange={_onChange}
                          country={'ru'}
                          masks={{ru: '(...) ...-..-..'}}
                          inputStyle={{
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '21px',
                            paddingLeft: '48px',
                            marginLeft: '0',
                            background: '#333333',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '20px',
                            width: '250px',
                            height: 0
                          }}
                          buttonStyle={{
                            borderRadius: "none",
                            background: '#333333',
                            border: 'none',
                            color: '#fff',
                          }}
                          dropdownStyle={{width: "250px"}}
            />
            : <input className={inputClass}
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