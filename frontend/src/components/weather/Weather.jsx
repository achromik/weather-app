import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from 'src/config/variables';
import { WeatherMainInfo } from 'src/components/weather/WeatherMainInfo';
import { WeatherParams } from 'src/components/weather/WeatherParams';
import { SectionWrapper } from 'src/common/components/SectionWrapper';

const PreHeader = styled.p`
    font-size: ${sizes.font.normal};
    color: ${colors.primaryText};
`;

export const Weather = () => (
    <SectionWrapper>
        <PreHeader>Current weather for</PreHeader>
        <WeatherMainInfo />
        <WeatherParams />
    </SectionWrapper>
);
