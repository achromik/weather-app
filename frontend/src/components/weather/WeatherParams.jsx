import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { weatherDataSelector } from 'src/features/weather/selectors/weatherSelectors';
import { Wrapper } from 'src/common/components/Wrapper';
import { DataTile } from 'src/common/components/DataTile';
import { AqiContainer } from 'Components/coordsWeather/AqiContainer';

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const WeatherParamsRaw = ({ weatherParams, wind }) => (
    <Wrapper>
        <Row>
            <DataTile name="Temp. max" value={weatherParams.temp_max.toFixed(1)} unit="°C" />
            <DataTile name="Temp. min" value={weatherParams.temp_min.toFixed(1)} unit="°C" />
            <DataTile name="Pressure" value={weatherParams.pressure} unit="hPa" />
            <DataTile name="Humidity" value={weatherParams.humidity} unit="%" />
            <DataTile name="Wind" value={wind.speed} unit="m/s" />
            <AqiContainer />
        </Row>
    </Wrapper>
);

const mapStateToProps = state => ({
    weatherParams: weatherDataSelector(state).main,
    wind: weatherDataSelector(state).wind,
});

export const WeatherParams = connect(mapStateToProps)(WeatherParamsRaw);
