import React from 'react';

import './styles.scss';

import MOButtonComponent from "../../shared/components/MOButton";
import MOFormInput from "../../shared/components/MOFormInput";

const ManageLobby = ({handleCreate, option, ...props}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLobby = {
            title: e.target.title.value,
            description: e.target.description.value,
            private: e.target.private.checked,
            streaming_mode: e.target.streaming_mode.checked,
        };
        handleCreate(newLobby);
    };
    const renderCreateLobbyForm = () => (
        <div className="create-form-container">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <MOFormInput
                        title="Title:"
                        inputName="title"
                    />
                    <MOFormInput
                        title="Description:"
                        inputName="description"
                    />
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

    return renderCreateLobbyForm();
};

export default ManageLobby;