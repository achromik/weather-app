import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { FindWeather } from '../FindWeather';

const mockProps = {
    isFetching: false,
    fetchedSuccessfully: true,
    data: {
        coord: { lon: -0.13, lat: 51.51 },
        weather: [
            {
                id: 300,
                main: 'Drizzle',
                description: 'light intensity drizzle',
                icon: '09d',
            },
        ],
        base: 'stations',
        main: {
            temp: 280.32,
            pressure: 1012,
            humidity: 81,
            temp_min: 279.15,
            temp_max: 281.15,
        },
        visibility: 10000,
        wind: { speed: 4.1, deg: 80 },
        clouds: { all: 90 },
        dt: 1485789600,
        sys: {
            type: 1,
            id: 5091,
            message: 0.0103,
            country: 'GB',
            sunrise: 1485762037,
            sunset: 1485794875,
        },
        id: 2643743,
        name: 'London',
        cod: 200,
    },
    error: {},
};

const mockErrorProps = {
    isFetching: false,
    fetchedSuccessfully: true,
    data: {},
    error: {
        body: { cod: '404', message: 'city not found' },
        code: 404,
    },
};

const mockFetchingDataProps = {
    isFetching: true,
    fetchedSuccessfully: false,
    data: {},
    error: {},
};

describe('FindWeather container', () => {
    it('renders', () => {
        const wrapper = shallow(<FindWeather {...mockProps} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders with no weather data', () => {
        const wrapper = shallow(<FindWeather {...mockProps} data={{}} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders with fetching error', () => {
        const wrapper = shallow(<FindWeather {...mockErrorProps} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders while data is fetching', () => {
        const wrapper = shallow(<FindWeather {...mockFetchingDataProps} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
