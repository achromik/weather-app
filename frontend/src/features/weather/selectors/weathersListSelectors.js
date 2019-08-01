export const getWeathersListState = state => state.weathersList;

export const isWeathersListFetchingSelector = state => getWeathersListState(state).isFetching;

export const weathersListFetchedSuccessfullySelector = state =>
    getWeathersListState(state).fetchedSuccessfully;

export const weathersListDataSelector = state => getWeathersListState(state).data;

export const weathersListErrorSelector = state => getWeathersListState(state).error;
