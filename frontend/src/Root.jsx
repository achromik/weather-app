import React from 'react';
import { Router } from 'react-router-dom';

import { history } from 'src/config/history';
import { Navigation } from 'src/components/navigation/Navigation';
import { Routes } from 'src/components/routes/Routes';

export const Root = () => (
    <Router history={history}>
        <Navigation />
        <Routes />
    </Router>
);
