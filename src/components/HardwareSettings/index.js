import React, { Component } from 'react';

import './styles.scss';
import MOButtonComponent from "../../shared/components/MOButton";

class HardwareSettings extends Component {
    state = {
        hardwareIsReady: false,
        hardwareError: false,
        cameraIsReady: false,
        microphoneIsReady: false,
        soundIsReady: false,
    };

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.video = document.querySelector('video');
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.checkSetupDevices();
    }

    checkSetupDevices = () => {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({audio: true, video: true}, (stream) => {
                this.video.src = stream;
                this.localMediaStream = stream;
            }, this.onFailSoHard);
        } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia('audio, video', function(stream) {
                this.video.src = window.webkitURL.createObjectURL(stream);
                this.localMediaStream = stream;
            }, this.onFailSoHard);
        } else {
            console.log('getUserMedia');
            this.video.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'; // fallback.
        }
        this.video.addEventListener('click', this.snapshot, false);
    };

    onFailSoHard =  (e) => {
        console.log('Reeeejected!', e);
        this.video.src = 'https://www.youtube.com/watch?v=kOHB85vDuow'; // fallback.
        this.setState({
            hardwareIsReady: false,
            hardwareError: true,
        });
    };

    snapshot = () => {
        if (this.localMediaStream) {
            this.ctx.drawImage(this.video, 0, 0);
            // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
            document.querySelector('img').src = this.canvas.toDataURL('image/webp');
        }
    };

    renderSetupScreen = () => {
        return (
            <div className="hardware-container">
                <h2>Hardware Setup...</h2>
                <video autoPlay={true} />
                <canvas ref="canvas" />
                <img src="" alt="img"/>
            </div>
        );
    };

    renderSetupError = () => {
        return (
            <div>
                <h2>Please, Fix Yor Devices</h2>
                <MOButtonComponent handleClick={this.checkSetupDevices} title="Check Setup Again" />
            </div>
        );
    };

    render () {
        return !this.state.hardwareError ? this.renderSetupScreen() : this.renderSetupError();
    }
}

export default HardwareSettings;