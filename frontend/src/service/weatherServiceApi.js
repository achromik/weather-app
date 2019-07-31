import { apiKey, apiUrl } from 'src/config/weatherApi';

const weatherUri = `${apiUrl}weather?appid=${apiKey}`;
const findWeatherUri = `${apiUrl}find?appid=${apiKey}`;

const fetchData = (url, metric) =>
    fetch(`${url}${metric ? '&units=metric' : ''}`)
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

export const getCoordsWeather = (geolocation, metric = true) => {
    const { latitude, longitude } = geolocation;

    return fetchData(`${weatherUri}&lat=${latitude}&lon=${longitude}`, metric);
};

export const getCityWeather = (cityName, metric = true) =>
    fetchData(`${findWeatherUri}&q=${cityName}`, metric);
