import { combineReducers } from 'redux';

import { weather } from 'src/features/weather/reducer/weatherReducer';
import { weathersList } from 'src/features/weather/reducer/weathersListReducer';

export const rootReducer = combineReducers({ weather, weathersList });
