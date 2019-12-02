import React from 'react';

function withHardware(Component) {
    const HardwareSettings = () => <div><h2>Hardware Setup...</h2></div>;
    const WithHardware = ({isHardwareInstalled, ...props}) => {
        return ((isHardwareInstalled === undefined || isHardwareInstalled === false)
                ? HardwareSettings()
                : <Component {...props} />
        );
    };

    WithHardware.displayName = `WithLoading(${Component.displayName || Component.name || 'Component'})`;
    return WithHardware;
}

export default withHardware;