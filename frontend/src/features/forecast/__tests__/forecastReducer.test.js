import {
    fetchForecastBegin,
    fetchForecastSuccess,
    fetchForecastFailure,
} from 'src/features/forecast/actions/forecastActions';
import { initialState, forecast } from 'src/features/forecast/reducers/forecastReducer';
import { forecastMock, forecastErrorMock } from 'src/features/forecast/__mocks__/forecastMocks';

describe('forecast reducer', () => {
    it('should handle fetchForecastBegin', () => {
        expect(forecast(initialState, fetchForecastBegin())).toEqual({
            ...initialState,
            isFetching: true,
        });
    });

    it('should handle fetchForecastSuccess', () => {
        expect(forecast(initialState, fetchForecastSuccess(forecastMock))).toEqual({
            ...initialState,
            fetchedSuccessfully: true,
            data: forecastMock,
        });
    });

    it('should handle fetchForecastFailure', () => {
        expect(forecast(initialState, fetchForecastFailure(forecastErrorMock))).toEqual({
            ...initialState,
            isFetching: false,
            error: forecastErrorMock,
        });
    });
});
