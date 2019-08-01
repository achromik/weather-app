import { fetchCoordsAqi } from 'src/service/airQualityServiceApi';

export const FETCH_AQI_BEGIN = 'FETCH_AQI_BEGIN';
export const fetchAqiBegin = () => ({
    type: FETCH_AQI_BEGIN,
});

export const FETCH_AQI_SUCCESS = 'FETCH_AQI_SUCCESS';
export const fetchAqiSuccess = aqiData => ({
    type: FETCH_AQI_SUCCESS,
    payload: aqiData,
});

export const FETCH_AQI_FAILURE = 'FETCH_AQI_FAILURE';
export const fetchAqiFailure = error => ({
    type: FETCH_AQI_FAILURE,
    payload: error,
});

export const fetchAqi = geolocation => async dispatch => {
    dispatch(fetchAqiBegin());

    return await fetchCoordsAqi(geolocation)
        .then(data => dispatch(fetchAqiSuccess(data)))
        .catch(error => dispatch(fetchAqiFailure(error)));
};
