import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'src/config/store';
import { Root } from 'src/Root';

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

export default App;
