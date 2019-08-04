import React from 'react';
import { connect } from 'react-redux';

import { isObjectEmpty } from 'src/common/helpers/isObjectEmpty';
import { fetchLocationWeather } from 'src/features/weather/actions/weatherActions';
import { PageWrapper } from 'src/common/components/PageWrapper';
import { GetLocationRaw } from 'src/components/coordsWeather/GetLocation';
import { Weather } from 'src/components/weather/Weather';
import {
    isWeatherFetchingSelector,
    weatherDataSelector,
    weatherErrorSelector,
    weatherFetchedSuccessfullySelector,
} from 'src/features/weather/selectors/weatherSelectors';
import { ErrorBox } from 'src/common/components/ErrorBox/ErrorBox';

export const CoordsWeather = ({
    isFetching,
    fetchedSuccessfully,
    data,
    error,
    fetchLocationWeather,
}) => (
    <PageWrapper>
        <GetLocationRaw onSuccess={geolocation => fetchLocationWeather(geolocation)} />
        {isFetching && <div>Loading data...</div>}
        {!isFetching && fetchedSuccessfully && !isObjectEmpty(data) && <Weather />}
        {!isObjectEmpty(error) && error.code !== 200 && <ErrorBox message={error.body.message} />}
    </PageWrapper>
);

const mapStateToProps = state => ({
    isFetching: isWeatherFetchingSelector(state),
    fetchedSuccessfully: weatherFetchedSuccessfullySelector(state),
    data: weatherDataSelector(state),
    error: weatherErrorSelector(state),
});

export default connect(
    mapStateToProps,
    { fetchLocationWeather },
)(CoordsWeather);
