import { getForecast } from 'src/service/weatherServiceApi';

export const FETCH_FORECAST_BEGIN = 'FETCH_FORECAST_BEGIN';
export const fetchForecastBegin = () => ({
    type: FETCH_FORECAST_BEGIN,
});

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const fetchForecastSuccess = data => ({
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
});

export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE';
export const fetchForecastFailure = error => ({
    type: FETCH_FORECAST_FAILURE,
    payload: error,
});

export const fetchForecast = (geolocation, daysForecast = 40) => async dispatch => {
    dispatch(fetchForecastBegin());

    const params = {
        lat: geolocation.latitude,
        lon: geolocation.longitude,
        cnt: daysForecast,
    };

    return await getForecast(params)
        .then(data => dispatch(fetchForecastSuccess(data)))
        .catch(error => dispatch(fetchForecastFailure(error)));
};
