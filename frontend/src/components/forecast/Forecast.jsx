import React from 'react';
import { connect } from 'react-redux';

import { isObjectEmpty } from 'src/common/helpers/isObjectEmpty';
import { fetchForecast } from 'src/features/forecast/actions/forecastActions';
import { PageWrapper } from 'src/common/components/PageWrapper';
import { GetLocation } from '../coordsWeather/GetLocation';
import { ErrorBox } from 'src/common/components/ErrorBox/ErrorBox';
import { ForecastInfo } from 'src/components/forecast/ForecastInfo';
import {
    isForecastFetchingSelector,
    forecastFetchedSuccessfullySelector,
    forecastErrorSelector,
    forecastDataSelector,
} from 'src/features/forecast/selectors/forecastSelectors';
import { Spinner } from 'src/common/components/Spinner';

export const ForecastRaw = ({ isFetching, fetchedSuccessfully, data, error, fetchForecast }) => (
    <PageWrapper>
        <GetLocation onSuccess={position => fetchForecast(position)} />
        {isFetching && <Spinner />}
        {!isFetching && fetchedSuccessfully && !isObjectEmpty(data) && <ForecastInfo data={data} />}
        {!isObjectEmpty(error) && error.code !== 200 && <ErrorBox message={error.body.message} />}
    </PageWrapper>
);

const mapStateToProps = state => ({
    isFetching: isForecastFetchingSelector(state),
    fetchedSuccessfully: forecastFetchedSuccessfullySelector(state),
    data: forecastDataSelector(state),
    error: forecastErrorSelector(state),
});

export default connect(
    mapStateToProps,
    { fetchForecast },
)(ForecastRaw);
