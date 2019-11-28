import Request from 'superagent';

const postRequestActionCreator = ({loadingAction, errorAction, receivedAction}) => {
    const requestWrapper = (url, body) => {
        const request = (dispatch) => {
            dispatch(loadingAction(true));
            dispatch(errorAction(false));
            const apiHost = 'http://localhost:3200';
            Request.post(apiHost + url)
                .send(body)
                .then((response) => {
                    dispatch(receivedAction(response.body));
                    dispatch(loadingAction(false));
                })
                .catch(() => {
                    dispatch(errorAction(true));
                });
        };

        return request;

    };
    return requestWrapper;
};

export default postRequestActionCreator;