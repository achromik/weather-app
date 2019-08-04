import {
    FETCH_LOCATION_WEATHER_BEGIN,
    FETCH_LOCATION_WEATHER_SUCCESS,
    FETCH_LOCATION_WEATHER_FAILURE,
} from '../actions/weatherActions';

const initialState = {
    isFetching: false,
    fetchedSuccessfully: false,
    data: {},
    error: {},
};

export const weather = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATION_WEATHER_BEGIN:
            return {
                ...initialState,
                isFetching: true,
            };

        case FETCH_LOCATION_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchedSuccessfully: true,
                data: action.payload,
            };

        case FETCH_LOCATION_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
