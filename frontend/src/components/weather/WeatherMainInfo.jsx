import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { colors } from 'src/config/variables';
import { Wrapper } from 'src/common/components/Wrapper';
import { weatherDataSelector } from 'src/features/weather/selectors/weatherSelectors';
import { TemperatureWithIcon } from 'src/components/weather/TemperatureWhitIcon';

export const Header = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.primary};
`;

export const WeatherMainInfoRaw = ({ cityName, country, weather, temp }) => (
    <Wrapper>
        <Header>
            {cityName}, {country}
        </Header>
        <TemperatureWithIcon temp={temp} icon={weather.icon} />
    </Wrapper>
);

const mapStateToProps = state => ({
    temp: weatherDataSelector(state).main,
    cityName: weatherDataSelector(state).name,
    country: weatherDataSelector(state).sys.country,
    weather: weatherDataSelector(state).weather[0],
});

export const WeatherMainInfo = connect(mapStateToProps)(WeatherMainInfoRaw);
