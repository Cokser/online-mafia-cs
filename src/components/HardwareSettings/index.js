import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import MOButtonComponent from "../../shared/components/MOButton";
import {createStream} from "../../shared/store/actions/stream";

class HardwareSettings extends PureComponent {
    state = {
        hardwareIsReady: false,
        hardwareError: null,
        testMode: false,
        cameraIsReady: false,
        microphoneIsReady: false,
        soundIsReady: false,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initInterface2();
        this.checkSetupDevices();
    }

    initInterface2 = () => {
        this.videoElement = document.querySelector('video');
        this.audioSelect = document.querySelector('select#audioSource');
        this.videoSelect = document.querySelector('select#videoSource');
    };

    checkSetupDevices = () => {
        try {
            navigator.mediaDevices.enumerateDevices()
                .then(this.gotDevices)
                .then(this.getStream)
                .catch(this.handleError);

            this.audioSelect.onchange = this.getStream;
            this.videoSelect.onchange = this.getStream;
        }
        catch (e) {
            console.log('checking device error: ', e);
        }
    };


    gotStream = (stream) => {
        window.stream = stream; // make stream available to console
        this.videoElement.srcObject = stream;
    };

    handleError = (error) => {
        console.error('getUserMedia Error: ', error);
    };
    getStream = () => {
        if (window.stream) {
            window.stream
                .getTracks()
                .forEach((track) => track.stop());
        }

        console.log('devices', this.videoSelect.value, this.audioSelect.value);

        let constraints = {
            audio: {
                deviceId: {exact: this.audioSelect.value}
            },
            video: {
                deviceId: {exact: this.state.testMode === 'fake'
                        ? 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
                        : this.videoSelect.value}
            }
        };
        constraints.video = this.state.testMode ? constraints.video : false;
        console.log('constraints: ', constraints);

        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

        if (navigator.getUserMedia) {
            console.log('getUserMedia true');
            navigator.mediaDevices.getUserMedia(constraints)
                    .then(this.gotStream)
                    .catch(this.handleError);
        } else if (navigator.webkitGetUserMedia) {
            console.log('webkitGetUserMedia true');
            navigator.webkitGetUserMedia(constraints, this.gotStream, this.handleError);
        } else {
            this.onFailSoHard();
        }
        this.videoElement.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'; // fallback.

    };

    gotDevices = (deviceInfos) => {

        for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            const option = document.createElement('option');
            option.value = deviceInfo.deviceId;

            if (deviceInfo.kind === 'audioinput') {
                option.text = deviceInfo.label ||
                    'microphone ' + (this.audioSelect.length + 1);
                this.audioSelect.appendChild(option);
            } else if (deviceInfo.kind === 'videoinput') {
                option.text = deviceInfo.label || 'camera ' +
                    (this.videoSelect.length + 1);
                    this.videoSelect.appendChild(option);
            } else {
                console.log('Found another kind of device: ', deviceInfo.kind);
            }
        }

        if (deviceInfos.find(el => el.kind !== 'videoinput') || this.state.testMode) {
            const newOption = document.createElement('option');
            newOption.value = 'fake';
            newOption.text = 'Fake Video Input';
            this.videoSelect.appendChild(newOption);

        }
    };

    handleTestModeChange = () => {
        console.log('handleTestModeChange');

        this.setState({
            hardwareIsReady: true,
            hardwareError: false,
            testMode: true,
            cameraIsReady: true,
            microphoneIsReady: true,
            soundIsReady: true,
        });
    };

    onFailSoHard = (e) => {
        this.video.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'; // fallback.
        this.setState({
            hardwareIsReady: false,
            hardwareError: true,
        });
    };

    renderSetupScreen = () => {
        return (
            <div className="hardware-container">
                <h2>Hardware Setup...</h2>
                <div className="select-hardware">
                    <label htmlFor="audioSource">Audio source: </label>
                    <select id="audioSource" />
                </div>
                <div className="select-hardware">
                    <label htmlFor="videoSource">Video source: </label>
                    <select id="videoSource" />
                </div>
                <video autoPlay controls={true}/>
            </div>
        );
    };

    renderSetupError = () => {
        return (
            <div>
                <h2>Please, Fix Yor Devices</h2>
                <MOButtonComponent handleClick={this.checkSetupDevices} title="Check Setup Again"/>
            </div>
        );
    };

    handleSubmitHardware = () => {
        if (this.state.hardwareIsReady) {

        }
    };

    render() {
        console.log(this.state.data);
        return (
            <div className="hardware-container">
                {this.renderSetupScreen()}
                {this.state.hardwareError === true && this.renderSetupError()}
                <div className="setup-options">
                    <MOButtonComponent handleClick={this.handleTestModeChange} title="Enable Test Mode"/>
                    <MOButtonComponent handleClick={this.checkSetupDevices} title="Enter the Lobby"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = {
    createStream: createStream,
};

HardwareSettings = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HardwareSettings);

export default HardwareSettings;