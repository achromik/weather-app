import { combineReducers } from 'redux';

import { weather } from 'src/features/weather/reducers/weatherReducer';
import { weathersList } from 'src/features/weather/reducers/weathersListReducer';
import { airQuality } from 'src/features/airQuality/reducers/airQualityReducer';

export const rootReducer = combineReducers({ weather, weathersList, airQuality });
