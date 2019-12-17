import React from 'react';

import './styles.scss';

import MOButtonComponent from "../../shared/components/MOButton";
import MOFormInput from "../../shared/components/MOFormInput";

const ManageLobby = ({handleCreate, option, redirectToLobby }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLobby = {
            title: e.target.title.value,
            description: e.target.description.value,
            private: e.target.private.checked,
            streaming_mode: e.target.streaming_mode.checked,
            mode: e.target.mode.value,
        };
        handleCreate(newLobby);
    };

    const handleEnter = (e) => {
        e.preventDefault();

        redirectToLobby({text: e.target.enterId.value});
    };

    const renderCreateLobbyForm = () => (
        <div className="create-form-container">
            <form onSubmit={handleSubmit} className="create-form" >
                <div className="form-group">
                    <MOFormInput
                        title="Title:"
                        inputName="title"
                    />
                    <MOFormInput
                        title="Description:"
                        inputName="description"
                    />
                    <div className="mo-form-input-container">
                        <p className="form-label">
                            Game Mode:
                        </p>
                        <label htmlFor="funMode">
                            Fun
                            <input
                                id="funMode"
                                className="form-input"
                                type="radio"
                                name="mode"
                                value="fun"
                                defaultChecked={true}
                            />
                        </label>
                        <label htmlFor="sportMode">
                            Sport
                            <input
                                id="sportMode"
                                className="form-input"
                                type="radio"
                                name="mode"
                                value="sport"
                                defaultChecked={false}
                            />
                        </label>
                        <label htmlFor="hardMode">
                            Hard
                            <input
                                id="hardMode"
                                className="form-input"
                                type="radio"
                                name="mode"
                                value="hardMode"
                                defaultChecked={false}
                            />
                        </label>
                    </div>
                    <MOFormInput
                        title="Private Lobby:"
                        inputName="private"
                        inputType="checkbox"
                        defaultChecked={false}
                    />
                    <MOFormInput
                        title="Allow to watch:"
                        inputName="streaming_mode"
                        inputType="checkbox"
                        defaultChecked={true}
                    />
                </div>
                <MOButtonComponent
                    title="Create Lobby"
                    btnType="submit"
                />
            </form>
        </div>
    );

    const renderEnterLobbyForm = () => (
        <form onSubmit={handleEnter} className="create-form" >
            <div className="enter-form-container">
                <div className="form-group">
                    <MOFormInput
                        title="Enter the lobby:"
                        inputName="enterId"
                    />
                </div>
                <MOButtonComponent
                    title="Enter Lobby"
                    btnType="submit"
                />
            </div>
        </form>
    );

    return (
        <div>
            {renderEnterLobbyForm()}
            {renderCreateLobbyForm()}
        </div>
    );
};

export default ManageLobby;