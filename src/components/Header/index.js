import React from 'react';
import './styles.scss';

const HeaderComponent = () => {
    return (
        <header className="header-container">
            <a href="/">Home</a>
            <a href="/settings">Settings</a>
        </header>
    );
};

export default HeaderComponent;