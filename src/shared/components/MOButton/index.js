import React from 'react';
import './style.scss';

const MOButtonComponent = (
    {
        handleClick,
        btnType,
        handleFocus,
        disabled,
        title,
        btnStyle,
    }) => {
    const btnState = btnStyle ? ('mo-btn ' + btnStyle) : 'mo-btn';
    return (
        <div className="mo-btn-container">
            <button
                className={btnState}
                type={btnType || "button"}
                onClick={handleClick || null}
                disabled={disabled}
                onFocus={handleFocus || null}
            >{title}</button>
        </div>
    );
};

export default MOButtonComponent;