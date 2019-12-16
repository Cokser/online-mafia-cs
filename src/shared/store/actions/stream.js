export const CREATE_STREAM_SUCCESS = 'CREATE_STREAM_SUCCESS';
export const createStream = data => ({
    type: CREATE_STREAM_SUCCESS,
    payload: data,
});