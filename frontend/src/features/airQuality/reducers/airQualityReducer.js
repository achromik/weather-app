import {
    FETCH_AQI_BEGIN,
    FETCH_AQI_SUCCESS,
    FETCH_AQI_FAILURE,
} from 'src/features/airQuality/actions/airQualityActions';

const initialState = {
    isFetching: false,
    fetchedSuccessfully: false,
    data: {},
    error: {},
};

export const airQuality = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AQI_BEGIN:
            return {
                ...initialState,
                isFetching: true,
            };
        case FETCH_AQI_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchedSuccessfully: true,
                data: action.payload,
            };
        case FETCH_AQI_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
