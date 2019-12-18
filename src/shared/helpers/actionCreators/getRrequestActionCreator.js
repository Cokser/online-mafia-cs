import Request from 'superagent';

const getRequestActionCreator = ({loadingAction, errorAction, receivedAction}) => {
    const requestWrapper = (url, cb) => {
        const request = (dispatch) => {
            dispatch(loadingAction(true));
            dispatch(errorAction(false));
            const apiHost = 'http://localhost:3200/lobby/';
            Request.get(apiHost + url)
                .then((response) => {
                    dispatch(receivedAction(response.body));
                    if (!!cb) {
                        cb();
                    }
                    dispatch(loadingAction(false));
                })
                .catch((e) => {
                    dispatch(errorAction(e.response));
                });
        };
        return request;
    };
    return requestWrapper;
};

export default getRequestActionCreator;