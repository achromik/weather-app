import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from 'src/config/history';
import { Navigation } from 'src/components/navigation/Navigation';

import { HomePage } from 'src/components/homePage/HomePage';

export const Root = () => (
    <Router history={history}>
        <Navigation />
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
    </Router>
);
