import {
    FETCH_CITY_WEATHER_BEGIN,
    FETCH_CITY_WEATHER_SUCCESS,
    FETCH_CITY_WEATHER_FAILURE,
} from '../actions/weatherActions';

const initialState = {
    isFetching: false,
    fetchedSuccessfully: false,
    data: undefined,
    error: undefined,
};

export const weathersList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITY_WEATHER_BEGIN:
            return {
                ...initialState,
                isFetching: true,
            };

        case FETCH_CITY_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchedSuccessfully: true,
                data: action.payload,
            };

        case FETCH_CITY_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
