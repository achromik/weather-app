import { getCityWeather, getCoordsWeather } from 'src/service/weatherServiceApi';

export const FETCH_CITY_WEATHER_BEGIN = 'FETCH_CITY_WEATHER_BEGIN';
export const fetchCityWeatherBegin = () => ({
    type: FETCH_CITY_WEATHER_BEGIN,
});

export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS';
export const fetchCityWeatherSuccess = weatherData => ({
    type: FETCH_CITY_WEATHER_SUCCESS,
    payload: weatherData,
});

export const FETCH_CITY_WEATHER_FAILURE = 'FETCH_CITY_WEATHER_FAILURE';
export const fetchCityWeatherFailure = error => ({
    type: FETCH_CITY_WEATHER_FAILURE,
    payload: error,
});

export const FETCH_LOCATION_WEATHER_BEGIN = 'FETCH_LOCATION_WEATHER_BEGIN';
export const fetchLocationWeatherBegin = () => ({
    type: FETCH_LOCATION_WEATHER_BEGIN,
});

export const FETCH_LOCATION_WEATHER_SUCCESS = 'FETCH_LOCATION_WEATHER_SUCCESS';
export const fetchLocationWeatherSuccess = weatherData => ({
    type: FETCH_LOCATION_WEATHER_SUCCESS,
    payload: weatherData,
});

export const FETCH_LOCATION_WEATHER_FAILURE = 'FETCH_LOCATION_WEATHER_FAILURE';
export const fetchLocationWeatherFailure = error => ({
    type: FETCH_LOCATION_WEATHER_FAILURE,
    payload: error,
});

export const fetchCityWeather = cityName => async dispatch => {
    dispatch(fetchCityWeatherBegin(cityName));

    return await getCityWeather(cityName)
        .then(data => {
            dispatch(fetchCityWeatherSuccess(data));
        })
        .catch(error => dispatch(fetchCityWeatherFailure(error)));
};

export const fetchLocationWeather = geolocation => async dispatch => {
    dispatch(fetchLocationWeatherBegin());

    return await getCoordsWeather(geolocation)
        .then(data => dispatch(fetchLocationWeatherSuccess(data)))
        .catch(error => dispatch(fetchLocationWeatherFailure(error)));
};
