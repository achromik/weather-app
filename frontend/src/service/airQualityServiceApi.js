import { apiURL, apiKey } from 'src/config/airQualityAPI';

const fetchData = url =>
    fetch(`${url}/?token=${apiKey}`)
        .then(handleErrors)
        .then(async response => response.json())
        .then(data => {
            if (data.status === 'error') {
                const err = new Error(data.message);
                err.body = data;
                throw err;
            }

            return data;
        })
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

export const fetchCoordsAqi = geolocation => {
    const params = `geo:${geolocation.latitude};${geolocation.longitude}`;

    return fetchData(`${apiURL}${params}`);
};
