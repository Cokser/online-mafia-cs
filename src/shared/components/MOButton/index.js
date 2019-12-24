import React from 'react';
import './style.scss';

const MOButtonComponent = ({ handleClick, btnType, handleFocus, title, btnStyle }) => {
    const btnState = btnStyle || 'btn-submit';
    return (
        <div className="mo-btn-container">
            <button
                className={btnState}
                type={btnType || "button"}
                onClick={handleClick || null}
                onFocus={handleFocus || null}
            >{title}</button>
        </div>
    );
};

export default MOButtonComponent;