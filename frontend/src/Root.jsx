import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import { history } from 'src/config/history';
import { Navigation } from 'src/components/navigation/Navigation';
import { Routes } from 'src/components/routes/Routes';
import { colors } from 'src/config/variables';

const Layout = styled.div`
    background-image: ${colors.bgGradient};
    min-height: 100vh;
`;
export const Root = () => (
    <Router history={history}>
        <Layout>
            <Navigation />
            <Routes />
        </Layout>
    </Router>
);
