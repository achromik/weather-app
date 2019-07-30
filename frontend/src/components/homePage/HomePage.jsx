import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Input } from 'antd';
import { sizes, breakpoints } from 'src/config/variables';

import { fetchCityWeather } from 'src/features/weather/actions/weatherActions';
import {
    isWeatherFetchingSelector,
    weatherDataSelector,
    weatherErrorSelector,
    weatherFetchedSuccessfullySelector,
} from 'src/features/weather/selectors/weatherSelectors';
import { ErrorBox } from 'src/common/components/ErrorBox/ErrorBox';
import { Weather } from 'src/components/weather/Weather';

const { Search } = Input;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: ${sizes.padding.xs};

    ${breakpoints.md} {
        padding: ${sizes.padding.lg};
    }
`;

export const HomePage = ({ isFetching, fetchedSuccessfully, data, error, fetchCityWeather }) => {
    return (
        <Wrapper>
            <h2>Weather App</h2>
            <Search
                size="large"
                placeholder="Enter city name..."
                style={{ width: 200 }}
                allowClear
                onSearch={value => fetchCityWeather(value)}
            />
            {isFetching && <div>Loading data...</div>}
            {fetchedSuccessfully && data && <Weather />}
            {error && error.code !== 200 && <ErrorBox message={error.body.message} />}
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    isFetching: isWeatherFetchingSelector(state),
    fetchedSuccessfully: weatherFetchedSuccessfullySelector(state),
    data: weatherDataSelector(state),
    error: weatherErrorSelector(state),
});

export default connect(
    mapStateToProps,
    { fetchCityWeather },
)(HomePage);
