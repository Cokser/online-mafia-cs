import React from 'react';
import './styles.scss';

import withLoading from "../../../shared/hoc/withLoading/withLoading";
import MOFormInput from "../../../shared/components/MOFormInput";
import MOButtonComponent from "../../../shared/components/MOButton";

const LoginComponent = ({handleSubmit, handleAction, ...props}) => {
    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form" >
                <div className="form-group">
                    <MOFormInput
                        title="Email:"
                        inputType="email"
                        inputName="email"
                    />
                </div>
                <div className="form-group">
                    <MOFormInput
                        title="Password:"
                        inputName="password"
                        inputType="password"
                    />
                </div>
                <div className="auth-options">
                    <MOButtonComponent
                        title="I don't have an account"
                        handleClick={handleAction}
                        btnStyle="btn-warning"
                        btnType="button"

                    />
                    <MOButtonComponent
                        title="Login"
                        btnType="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default withLoading(LoginComponent);