import React from 'react';
import styled from 'styled-components';

import { WeatherMainInfo } from 'src/components/weather/WeatherMainInfo';
import { WeatherParams } from 'src/components/weather/WeatherParams';

const WeatherWrapper = styled.div`
    margin: 1rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Weather = () => (
    <WeatherWrapper>
        <h4>Current weather</h4>
        <WeatherMainInfo />
        <WeatherParams />
    </WeatherWrapper>
);
