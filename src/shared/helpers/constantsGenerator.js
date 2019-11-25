const started = '_STARTED';
const error = '_ERROR';
const received = '_RECEIVED';

const generateConstants = (reducerName) => ({
    [`${reducerName.toUpperCase()}${started}`]: reducerName.toUpperCase() + started,
    [`${reducerName.toUpperCase()}${error}`]: reducerName.toUpperCase() + error,
    [`${reducerName.toUpperCase()}${received}`]: reducerName.toUpperCase() + received,
});

export default generateConstants;