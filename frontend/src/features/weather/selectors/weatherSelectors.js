export const getWeatherState = state => state.weather;

export const isWeatherFetchingSelector = state => getWeatherState(state).isFetching;

export const weatherFetchedSuccessfullySelector = state =>
    getWeatherState(state).fetchedSuccessfully;

export const weatherDataSelector = state => getWeatherState(state).data;

export const weatherErrorSelector = state => getWeatherState(state).error;
