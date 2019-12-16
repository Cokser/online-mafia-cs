import {CREATE_STREAM_SUCCESS} from "../actions/stream";

const initialState = {
    streamData: null,
    hardwareIsReady: false,
    isLoading: null,
    error: false,
};

const streamReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_STREAM_SUCCESS: {
            return {
                ...state,
                streamData: action.payload,
            };
        }
        default: return state
    }
};

export default streamReducer;