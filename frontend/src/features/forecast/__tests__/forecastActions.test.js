import fetchMock from 'fetch-mock';

import {
    FETCH_FORECAST_BEGIN,
    fetchForecast,
    FETCH_FORECAST_SUCCESS,
} from 'src/features/forecast/actions/forecastActions';
import { forecastMock } from '../__mocks__/forecastMocks';

describe('fetchForecast', () => {
    it('fetches forecast', async () => {
        const dispatch = jest.fn();
        const getForecast = jest.fn();
        const fetchData = jest.fn;

        fetchMock.get(
            'https://api.openweathermap.org/data/2.5/forecast?appid=a50c252cc8f85f81672566f5b53a8438&lat=15&lon=50&cnt=5&units=metric',
            forecastMock,
        );

        const geolocation = { latitude: 15, longitude: 50 };

        await fetchForecast(geolocation)(dispatch, getForecast);

        expect(dispatch).toBeCalledWith({ type: FETCH_FORECAST_BEGIN });
        expect(dispatch).toBeCalledWith({ type: FETCH_FORECAST_SUCCESS, payload: forecastMock });
    });
});
