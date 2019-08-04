import fetchMock from 'fetch-mock';

import {
    FETCH_FORECAST_BEGIN,
    fetchForecast,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,
} from 'src/features/forecast/actions/forecastActions';
import { forecastMock, forecastErrorMock } from '../__mocks__/forecastMocks';

describe('fetchForecast', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('fetches forecast', async () => {
        const dispatch = jest.fn();
        const getForecast = jest.fn();

        fetchMock.get(
            'https://api.openweathermap.org/data/2.5/forecast?appid=a50c252cc8f85f81672566f5b53a8438&lat=15&lon=50&cnt=40&units=metric',
            forecastMock,
        );
        fetchMock.spy();
        const geolocation = { latitude: 15, longitude: 50 };

        await fetchForecast(geolocation)(dispatch, getForecast);

        expect(dispatch).toBeCalledWith({ type: FETCH_FORECAST_BEGIN });
        expect(dispatch).toBeCalledWith({
            type: FETCH_FORECAST_SUCCESS,
            payload: forecastMock,
        });
    });

    it('handles errors', async () => {
        const dispatch = jest.fn();
        const getForecast = jest.fn();

        fetchMock.get(
            'https://api.openweathermap.org/data/2.5/forecast?appid=a50c252cc8f85f81672566f5b53a8438&lat=15&lon=50&cnt=40&units=metric',
            {
                status: 401,
                body: forecastErrorMock,
            },
        );

        const geolocation = { latitude: 15, longitude: 50 };

        await fetchForecast(geolocation)(dispatch, getForecast);

        const err = new Error('Unauthorized');
        err.body = forecastErrorMock;
        err.code = 401;

        expect(dispatch).toBeCalledWith({
            type: FETCH_FORECAST_FAILURE,
            payload: err,
        });
    });
});
