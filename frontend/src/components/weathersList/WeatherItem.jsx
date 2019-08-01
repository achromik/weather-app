import React from 'react';
import styled from 'styled-components';

import { iconWeatherURL } from 'src/config/iconWeatherURL';
import { sizes, colors } from 'src/config/variables';

const Wrapper = styled.li`
    width: 100%;
    margin: 10px 0;
    display: flex;
    background-color: #fff3;
    padding: 10px 0;
`;

const IconBox = styled.div`
    display: flex;
    align-items: center;
    width: 70px;

    img {
        width: 100%;
    }
`;

const WeatherDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
`;

const RightSide = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const Temp = styled.p`
    color: ${colors.primaryText};
    text-align: center;
    font-size: ${sizes.font.medium};
    font-weight: 800;
    margin: 0;
`;

const City = styled.p`
    font-size: ${sizes.font.normal};
    font-weight: 800;
    color: ${colors.primaryText};
`;

const Coords = styled.p`
    font-size: ${sizes.font.small};
    color: ${colors.secondaryText};
    margin: 0;
`;

const Description = styled.p`
    color: ${colors.primaryText};
    text-transform: capitalize;
`;

export const WeatherItem = ({ data }) => (
    <Wrapper>
        <IconBox>
            <img src={iconWeatherURL(data.weather[0].icon)} alt={data.weather[0].description} />
        </IconBox>
        <WeatherDetails>
            <City>
                {data.name}, {data.sys.country}
            </City>
            <Description>{data.weather[0].description}</Description>
            <Coords>
                Geo: [{data.coord.lat}, {data.coord.lon}]
            </Coords>
        </WeatherDetails>
        <RightSide>
            <Temp>
                {data.main.temp.toFixed(1)} <br />
                °C
            </Temp>
        </RightSide>
    </Wrapper>
);
