import {
    FETCH_FORECAST_BEGIN,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,
} from 'src/features/forecast/actions/forecastActions';

export const initialState = {
    isFetching: false,
    fetchedSuccessfully: false,
    data: {},
    error: {},
};

export const forecast = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FORECAST_BEGIN:
            return {
                ...initialState,
                isFetching: true,
            };
        case FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchedSuccessfully: true,
                data: action.payload,
            };
        case FETCH_FORECAST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
