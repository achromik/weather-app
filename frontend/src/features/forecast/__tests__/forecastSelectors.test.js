import {
    isForecastFetchingSelector,
    forecastFetchedSuccessfullySelector,
    forecastDataSelector,
    forecastErrorSelector,
} from 'src/features/forecast/selectors/forecastSelectors';

import { forecastStateMock } from 'src/features/forecast/__mocks__/forecastMocks';
import { isObjectEmpty } from 'src/common/helpers/isObjectEmpty';

describe('Forecast Selectors', () => {
    describe('isForecastFetchingSelector', () => {
        it('should return isFetching as boolean', () => {
            const isFetching = isForecastFetchingSelector(forecastStateMock);

            expect(typeof isFetching).toEqual('boolean');
        });
    });

    describe('forecastFetchedSuccessfullySelector', () => {
        it('should return fetchedSuccessfully as boolean', () => {
            const fetchedSuccessfully = forecastFetchedSuccessfullySelector(forecastStateMock);

            expect(typeof fetchedSuccessfully).toEqual('boolean');
        });
    });

    describe('forecastDataSelector', () => {
        it('should return data as object', () => {
            const data = forecastDataSelector(forecastStateMock);

            expect(typeof data).toEqual('object');
        });

        it('should return data as empty object', () => {
            const data = forecastDataSelector(forecastStateMock);

            expect(isObjectEmpty(data)).toBe(true);
        });

        it('should return data as non empty object', () => {
            const data = forecastDataSelector({
                forecast: { ...forecastStateMock, data: { first: true, second: 'param' } },
            });

            expect(isObjectEmpty(data)).toBe(false);
        });
    });

    describe('forecastErrorSelector', () => {
        it('should return error as object', () => {
            const error = forecastErrorSelector(forecastStateMock);

            expect(typeof error).toEqual('object');
        });

        it('should return error as empty object', () => {
            const error = forecastErrorSelector(forecastStateMock);

            expect(isObjectEmpty(error)).toBe(true);
        });

        it('should return error as non empty object', () => {
            const error = forecastErrorSelector({
                forecast: { ...forecastStateMock, error: { first: true, second: 'param' } },
            });

            expect(isObjectEmpty(error)).toBe(false);
        });
    });
});
