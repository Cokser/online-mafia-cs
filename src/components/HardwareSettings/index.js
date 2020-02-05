import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import MOButtonComponent from "../../shared/components/MOButton";
import {createStream, storeStream} from "../../shared/store/actions/stream";
import MOVideoStream from "../../shared/components/MOVideoStream";

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
        if (stream) {
            this.setState({
                hardwareIsReady: true,
            }, () => this.props.storeStream(stream));
        }
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

        let constraints = {
            audio: {
                deviceId: {exact: this.audioSelect.value},
                echoCancellation: true,
                autoGainControl: false,
                volume: 0.5,
            },
            video: {
                deviceId: {exact: this.state.testMode === 'fake'
                        ? 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
                        : this.videoSelect.value},
            },
        };
        constraints.video = this.state.testMode ? false : constraints.video;

        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints)
                    .then(this.gotStream)
                    .catch(this.handleError);
        } else if (navigator.webkitGetUserMedia) {
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
        if (deviceInfos.every(el => el.kind !== 'videoinput') || this.state.testMode) {
            console.log('bye cameraman');
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
                <MOVideoStream width="640" height="480" autoPlay controls muted />
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
            this.props.createStream();
        }
    };

    render() {
        return (
            <div className="hardware-container">
                {this.renderSetupScreen()}
                {this.state.hardwareError === true && this.renderSetupError()}
                <div className="setup-options">
                    <MOButtonComponent handleClick={this.handleTestModeChange} title="Enable Test Mode"/>
                    <MOButtonComponent handleClick={this.handleSubmitHardware} title="Enter the Lobby"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    streamData: state.Shared.stream.streamData,
});

const mapDispatchToProps = dispatch => ({
    createStream: () => dispatch(createStream()),
    storeStream: (stream) => dispatch(storeStream(stream)),
});

HardwareSettings = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HardwareSettings);

export default HardwareSettings;