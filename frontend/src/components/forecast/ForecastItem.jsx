import React from 'react';
import styled from 'styled-components';

import { sentenceCase } from 'src/common/helpers/sentenceCase';
import { iconWeatherURL } from 'src/config/iconWeatherURL';
import { breakpoints } from 'src/config/variables';

const Item = styled.div`
    display: flex;
    padding: 0.5rem;
    align-items: center;
    background-color: #c0c0c0;

    :nth-of-type(2n) {
        background-color: #ecebea;
    }
`;

const Img = styled.img`
    width: 35px;

    ${breakpoints.md} {
        width: 60px;
    }
`;

const Time = styled.p`
    margin: 0;
    width: 40px;

    ${breakpoints.md} {
        width: 50px;
    }
`;

const Description = styled.p`
    margin: 0 0 0 5px;
    flex: 1;

    ${breakpoints.md} {
        /* width: 200px; */
    }
`;

const Temp = styled.p`
    margin: 0;
    width: 75px;
    font-size: 1rem;
    font-weight: 800;

    ${breakpoints.md} {
        font-size: 1.25rem;
        width: 90px;
    }
`;

const Wind = styled.p`
    margin: 0;
    text-align: center;
    width: 30px;

    ${breakpoints.md} {
        width: 60px;
    }
`;

export const ForecastItem = ({ forecast }) => (
    <Item>
        <Time>{forecast.dt_txt.substr(11, 5)}</Time>
        <Temp>{forecast.main.temp.toFixed(1)} °C</Temp>
        <Img src={iconWeatherURL(forecast.weather[0].icon)} />
        <Description>{sentenceCase(forecast.weather[0].description)}</Description>
        <Wind>{forecast.wind.speed} m/s</Wind>
    </Item>
);
