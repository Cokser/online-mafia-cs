import React from 'react';
import {A} from 'hookrouter';
import './styles.scss';
import AdminPanelComponent from "../AdminPanel";

const HeaderComponent = () => {
    const manageAccount = true
        ? (<A href="/auth">Authorize</A>)
        : (<A href="/account">Account</A>);
    return (
        <header className="header-container">
            <div className="left-side">
                <AdminPanelComponent />
            </div>
            <div className="right-side">
                <A href="/" >Home</A>
                <A href="/settings">Settings</A>
                {manageAccount}
            </div>
        </header>
    );
};

export default HeaderComponent;