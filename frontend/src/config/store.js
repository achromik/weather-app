import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from 'src/config/rootReducer';

const composeEnhancer = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
