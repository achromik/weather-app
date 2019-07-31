import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'src/components/homePage/HomePage';
import CoordsWeather from 'src/components/coordsWeather/CoordsWeather';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/weather" component={CoordsWeather} />
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
