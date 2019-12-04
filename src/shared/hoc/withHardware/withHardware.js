import React from 'react';
import HardwareSettings from "../../../components/HardwareSettings";

function withHardware(Component) {
    const WithHardware = ({isHardwareInstalled, ...props}) => {
        return ((isHardwareInstalled === undefined || isHardwareInstalled === false)
                ? <HardwareSettings />
                : <Component {...props} />
        );
    };

    WithHardware.displayName = `WithLoading(${Component.displayName || Component.name || 'Component'})`;
    return WithHardware;
}

export default withHardware;