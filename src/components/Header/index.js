import React from 'react';
import {A} from 'hookrouter';
import './styles.scss';

const HeaderComponent = () => {
    const manageAccount = true
        ? (<A href="/auth">Authorize</A>)
        : (<A href="/account">Account</A>);
    return (
        <header className="header-container">
            <A href="/" >Home</A>
            <A href="/settings">Settings</A>
            {manageAccount}
        </header>
    );
};

export default HeaderComponent;