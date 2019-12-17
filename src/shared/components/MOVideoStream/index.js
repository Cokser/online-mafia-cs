import React from 'react';
import './style.scss';

class MOVideoStream extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            width,
            height,
            autoPlay,
            muted,
            controls,
        } = this.props;
        return (
            <div className="mo-video-container">
                <video
                    width={width}
                    height={height}
                    autoPlay={autoPlay}
                    controls={controls}
                    muted={muted}
                />
            </div>
        );
    }
};

export default MOVideoStream;