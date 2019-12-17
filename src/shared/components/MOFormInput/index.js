import React from 'react';
import './style.scss';

const MOFormInput = (
    {
        placeholder,
        inputType,
        title,
        inputName,
        defaultValue,
        defaultChecked,
    }) => {
    return (
        <div className="mo-form-input-container">
            <label htmlFor={inputName} className="form-label">
                {title}
            </label>
            <input
                className="form-input"
                id={inputName}
                type={inputType || 'text'}
                name={inputName}
                defaultChecked={defaultChecked}
                defaultValue={defaultValue || null}
                placeholder={placeholder || null}
            />
        </div>
    );
};

export default MOFormInput;