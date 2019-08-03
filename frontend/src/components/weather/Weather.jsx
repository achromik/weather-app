import React from 'react';

import { WeatherMainInfo } from 'src/components/weather/WeatherMainInfo';
import { WeatherParams } from 'src/components/weather/WeatherParams';
import { SectionWrapper } from 'src/common/components/SectionWrapper';

export const Weather = () => (
    <SectionWrapper>
        <h4>Current weather</h4>
        <WeatherMainInfo />
        <WeatherParams />
    </SectionWrapper>
);
