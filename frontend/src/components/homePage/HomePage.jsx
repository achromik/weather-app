import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

import { fetchCityWeather } from 'src/features/weather/actions/weatherActions';
import {
    isWeatherFetchingSelector,
    weatherDataSelector,
    weatherErrorSelector,
    weatherFetchedSuccessfullySelector,
} from 'src/features/weather/selectors/weatherSelectors';
import { ErrorBox } from 'src/common/components/ErrorBox/ErrorBox';

const { Search } = Input;

export const HomePage = ({ isFetching, fetchedSuccessfully, data, error, fetchCityWeather }) => {
    return (
        <>
            <h2>Home page</h2>
            <Search
                size="large"
                placeholder="large size"
                style={{ width: 200 }}
                allowClear
                onSearch={value => fetchCityWeather(value)}
            />
            {isFetching && <div>Loading data...</div>}
            {fetchedSuccessfully && data && (
                <div>
                    <p>City: {data.name}</p>
                    <p>Clouds: {data.clouds.all}%</p>
                </div>
            )}
            {error && error.code !== 200 && <ErrorBox message={error.body.message} />}
        </>
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
