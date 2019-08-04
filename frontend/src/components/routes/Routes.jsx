import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FindWeather from 'src/components/findWeather/FindWeather';
import CoordsWeather from 'src/components/coordsWeather/CoordsWeather';
import Forecast from 'src/components/forecast/Forecast';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={FindWeather} />
        <Route path="/weather" component={CoordsWeather} />
        <Route path="/forecast" component={Forecast} />
    </Switch>
);
