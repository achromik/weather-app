import { makeQueryParams } from 'src/common/helpers/makeQueryParams';
import { apiKey, apiUrl } from 'src/config/weatherApi';

const weatherUri = `${apiUrl}weather?appid=${apiKey}`;
const findWeatherUri = `${apiUrl}find?appid=${apiKey}`;

const fetchData = (url, units = 'metric') =>
    fetch(`${url}${units ? `&units=${units}` : ''}`)
        .then(handleErrors)
        .then(async response => response.json())
        .then(data => data)
        .catch(error => {
            throw error;
        });

const handleErrors = async response => {
    if (!response.ok) {
        const err = new Error(response.statusText);
        err.body = await response.json();
        err.code = response.status;
        throw err;
    }

    return response;
};

export const getCoordsWeather = geolocation => {
    return fetchData(`${weatherUri}&${makeQueryParams(geolocation)}`);
};

export const getCityWeather = params => fetchData(`${findWeatherUri}&${makeQueryParams(params)}`);
