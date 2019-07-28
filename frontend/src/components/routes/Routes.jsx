import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from 'src/config/history';
export const Root = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={<div>Homepage</div>} />
            <Route
                path="/forecast"
                component={
                    <div>
                        <h1>forecast</h1>
                    </div>
                }
            />
        </Switch>
    </Router>
);
