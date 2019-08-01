import React from 'react';
import styled from 'styled-components';

import { iconWeatherURL } from 'src/config/iconWeatherURL';

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column-reverse;
`;

const Col = styled.div`
    flex: 1;
`;

const Temp = styled.p`
    font-size: 2.5rem;
    font-weight: 800;
    color: #000;
    margin: 0;
`;

const Img = styled.img`
    width: 150px;
`;

export const TemperatureWithIcon = ({ temp, icon }) => (
    <Row>
        <Col>
            <Img src={iconWeatherURL(icon)} />
        </Col>
        <Col>
            <Temp>{temp.temp.toFixed(1)} °C</Temp>
        </Col>
    </Row>
);
