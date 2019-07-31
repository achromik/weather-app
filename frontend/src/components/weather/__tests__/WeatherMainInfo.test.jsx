import React, { Children } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { WeatherMainInfoRaw } from '../WeatherMainInfo';

const mockProps = {
    weather: {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
    },
    temp: {
        temp: 25.02,
        pressure: 1006,
        humidity: 73,
        temp_min: 22.78,
        temp_max: 27.22,
    },
    country: 'PL',
    cityName: 'Warsaw',
};

describe('WeatherMainInfo', () => {
    it('renders', () => {
        const wrapper = shallow(<WeatherMainInfoRaw {...mockProps} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders with city name and country', () => {
        const wrapper = shallow(<WeatherMainInfoRaw {...mockProps} />);
        expect(
            wrapper
                .children()
                .at(0)
                .text(),
        ).toBe('Warsaw, PL');
    });
});
