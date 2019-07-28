import { combineReducers } from 'redux';

import { weather } from 'src/features/weather/reducer/weatherReducer';

export const rootReducer = combineReducers({ weather });
