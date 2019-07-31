import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'src/components/homePage/HomePage';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
            path="/weather"
            component={() => (
                <div>
                    <h1>Temporary: Coords Weather Page</h1>
                </div>
            )}
        />
        <Route
            path="/forecast"
            component={() => (
                <div>
                    <h1>Temporary: Forecast Page</h1>
                </div>
            )}
        />
    </Switch>
);
