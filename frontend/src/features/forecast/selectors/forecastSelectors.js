const getForecastState = state => state.forecast;

export const isForecastFetchingSelector = state => getForecastState(state).isFetching;

export const forecastFetchedSuccessfullySelector = state =>
    getForecastState(state).fetchedSuccessfully;

export const forecastDataSelector = state => getForecastState(state).data;

export const forecastErrorSelector = state => getForecastState(state).error;
