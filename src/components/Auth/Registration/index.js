import React from 'react';

import './styles.scss';
import withLoading from "../../../shared/hoc/withLoading/withLoading";
import MOFormInput from "../../../shared/components/MOFormInput";
import MOButtonComponent from "../../../shared/components/MOButton";


const RegistrationComponent = ({handleSubmit, handleAction, ...props}) => {
    return (
        <div className="registration-form-container">
            <form onSubmit={handleSubmit} className="registration-form" >
                <div className="form-group">
                    <MOFormInput
                        title="Enter Your Email:"
                        inputType="email"
                        inputName="email"
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <MOFormInput
                        title="Enter Your Nickname:"
                        inputName="nickname"
                    />
                </div>
                <div className="form-group">
                    <MOFormInput
                        title="Enter Your Name:"
                        inputName="name"
                    />
                </div>
                <div className="auth-options">
                    <MOButtonComponent
                        title="I have an account"
                        btnStyle="btn-success"
                        handleClick={handleAction}
                        btnType="button"
                    />
                    <MOButtonComponent
                        title="Create Account"
                        btnType="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default withLoading(RegistrationComponent);