import React from 'react';
import './style.scss';

const MOButtonComponent = ({ handleClick, btnType, handleFocus, title }) => {
    return (
        <div className="mo-btn-container">
            <button
                className="mo-btn"
                type={btnType || "button"}
                onClick={handleClick || null}
                onFocus={handleFocus || null}
            >{title}</button>
        </div>
    );
};

export default MOButtonComponent;