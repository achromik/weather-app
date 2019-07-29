import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={() => (
                <div>
                    <h1>Temporary: HomePage</h1>
                </div>
            )}
        />
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
