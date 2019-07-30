import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { weatherDataSelector } from 'src/features/weather/selectors/weatherSelectors';
import { Wrapper } from 'src/common/Wrapper';
import { colors } from 'src/config/variables';

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    flex-wrap: wrap;
`;

const Tile = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${colors.blue};
    border-radius: 5px;
    margin: 3px;
    padding: 5px 10px;
    flex-wrap: wrap;
    max-width: 150px;
    color: ${colors.primary};
    background-color: #eee;
`;

const DataName = styled.p`
    font-size: 0.7rem;
    margin: 0;
    line-height: 1.25rem;
`;

const Value = styled.p`
    font-size: 2rem;
    text-align: center;
    margin: 0;
    font-weight: 800;
`;

const DataUnit = styled.p`
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    text-align: right;
`;

export const WeatherParamsRaw = ({ weatherParams }) => (
    <Wrapper>
        <Row>
            <Tile>
                <DataName>Temp. max</DataName>
                <Value>{weatherParams.temp_max.toFixed(1)}</Value>
                <DataUnit>°C</DataUnit>
            </Tile>
            <Tile>
                <DataName>Temp. min</DataName>
                <Value>{weatherParams.temp_min.toFixed(1)}</Value>
                <DataUnit>°C</DataUnit>
            </Tile>
            <Tile>
                <DataName>Pressure</DataName>
                <Value>{weatherParams.pressure}</Value>
                <DataUnit>hPa</DataUnit>
            </Tile>
            <Tile>
                <DataName>Humiditiy</DataName>
                <Value>{weatherParams.humidity}</Value>
                <DataUnit>%</DataUnit>
            </Tile>
        </Row>
    </Wrapper>
);

const mapStateToProps = state => ({
    weatherParams: weatherDataSelector(state).main,
});

export const WeatherParams = connect(mapStateToProps)(WeatherParamsRaw);
