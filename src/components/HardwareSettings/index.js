import React, { Component } from 'react';

import './styles.scss';
import MOButtonComponent from "../../shared/components/MOButton";

class HardwareSettings extends Component {
    state = {
        hardwareIsReady: false,
        hardwareError: null,
        testMode: false,
        cameraIsReady: false,
        microphoneIsReady: false,
        soundIsReady: false,
    };

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.initInterface2();
        this.checkSetupDevices2();
    }

    // initInterface = () => {
    //     this.video = document.querySelector('video');
    //     this.canvas = this.refs.canvas;
    //     this.ctx = this.canvas.getContext('2d');
    // };

    initInterface2 = () => {
        this.videoElement = document.querySelector('video');
        this.audioSelect = document.querySelector('select#audioSource');
        this.videoSelect = document.querySelector('select#videoSource');
        console.log(this.videoElement);
    };

    //
    // checkSetupDevices = () => {
    //     if (navigator.getUserMedia) {
    //         navigator.getUserMedia({audio: true, video: true}, (stream) => {
    //             this.video.src = stream;
    //             this.localMediaStream = stream;
    //         }, this.onFailSoHard);
    //     } else if (navigator.webkitGetUserMedia) {
    //         navigator.webkitGetUserMedia('audio, video', (stream) => {
    //             this.video.src = window.webkitURL.createObjectURL(stream);
    //             this.localMediaStream = stream;
    //         }, this.onFailSoHard);
    //     } else {
    //         this.onFailSoHard();
    //     }
    //     this.video.addEventListener('click', this.snapshot, false);
    // };
    checkSetupDevices2 = () => {
        navigator.mediaDevices.enumerateDevices()
            .then(this.gotDevices)
            .then(getStream)
            .catch(handleError);

        console.log(this.audioSelect, this.videoSelect);
        this.audioSelect.onchange = getStream;
        this.videoSelect.onchange = getStream;


        function getStream() {
            if (window.stream) {
                window.stream.getTracks().forEach((track) => track.stop());
            }

            const constraints = {
                audio: {
                    deviceId: {exact: this.audioSelect.value}
                },
                video: {
                    deviceId: {exact: this.videoSelect.value}
                }
            };

            navigator.mediaDevices.getUserMedia(constraints)
                .then(gotStream)
                .catch(handleError);
        }

        function gotStream(stream) {
            window.stream = stream; // make stream available to console
            this.videoElement.srcObject = stream;
        }

        function handleError(error) {
            console.error('Error: ', error);
        }

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
                console.log('Found another kind of device: ', deviceInfo);
            }
        }
    };

    handleTestModeChange = () => {
        console.log('handleTestModeChange');
        this.video.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'; // fallback.

        this.setState({
            hardwareIsReady: true,
            hardwareError: false,
            testMode: true,
            cameraIsReady: true,
            microphoneIsReady: true,
            soundIsReady: true,
        }, () => this.initInterface2());
    };

    onFailSoHard =  (e) => {
        this.video.src = 'https://www.youtube.com/watch?v=kOHB85vDuow'; // fallback.
        this.setState({
            hardwareIsReady: false,
            hardwareError: true,
        });
    };

    // snapshot = () => {
    //     if (this.localMediaStream) {
    //         this.ctx.drawImage(this.video, 0, 0);
    //         // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
    //         document.querySelector('img').src = this.canvas.toDataURL('image/webp');
    //     }
    // };

    renderSetupScreen = () => {
        return (
            <div className="hardware-container">
                <h2>Hardware Setup...</h2>
                <video autoPlay controls={true}/>
                <img src="" alt="img"/>
            </div>
        );
    };

    renderSetupError = () => {
        return (
            <div>
                <h2>Please, Fix Yor Devices</h2>
                <MOButtonComponent handleClick={this.checkSetupDevices2} title="Check Setup Again" />
            </div>
        );
    };

    render () {
        return (
            <div className="hardware-container">
                {this.renderSetupScreen()}
                {this.state.hardwareError === false && this.renderSetupError()}
                <div className="setup-options">
                    <MOButtonComponent handleClick={this.handleTestModeChange} title="Enable Test Mode" />
                    <MOButtonComponent handleClick={this.checkSetupDevices2} title="Enter the Lobby" />
                </div>
            </div>
        );
    }
}

export default HardwareSettings;