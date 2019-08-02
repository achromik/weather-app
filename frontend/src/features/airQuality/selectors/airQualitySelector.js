const getAirQualityState = state => state.airQuality;

export const getAirQualityData = state => getAirQualityState(state).data;
