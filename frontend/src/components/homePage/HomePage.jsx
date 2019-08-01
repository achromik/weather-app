import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

import { PageWrapper } from 'src/common/components/PageWrapper';
import { fetchCityWeather } from 'src/features/weather/actions/weatherActions';
import {
    isWeathersListFetchingSelector,
    weathersListDataSelector,
    weathersListErrorSelector,
    weathersListFetchedSuccessfullySelector,
} from 'src/features/weather/selectors/weathersListSelectors';
import { ErrorBox } from 'src/common/components/ErrorBox/ErrorBox';
import { SectionHeader } from 'src/common/components/SectionHeader';
import WeathersList from 'src/components/weathersList/WeathersList';

const { Search } = Input;

export const HomePage = ({ isFetching, fetchedSuccessfully, data, error, fetchCityWeather }) => (
    <PageWrapper>
        <SectionHeader>Weather App</SectionHeader>
        <Search
            size="large"
            placeholder="Enter city name..."
            style={{ width: 200 }}
            allowClear
            onSearch={value => fetchCityWeather(value)}
        />
        {isFetching && <div>Loading data...</div>}
        {fetchedSuccessfully && data && <WeathersList />}
        {error && error.code !== 200 && <ErrorBox message={error.body.message} />}
    </PageWrapper>
);

const mapStateToProps = state => ({
    isFetching: isWeathersListFetchingSelector(state),
    fetchedSuccessfully: weathersListFetchedSuccessfullySelector(state),
    data: !!weathersListDataSelector(state),
    error: weathersListErrorSelector(state),
});

export default connect(
    mapStateToProps,
    { fetchCityWeather },
)(HomePage);
