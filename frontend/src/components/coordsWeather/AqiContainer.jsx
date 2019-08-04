import React from 'react';
import { connect } from 'react-redux';

import { DataTile } from 'src/common/components/DataTile';
import { getAqiColor } from 'src/common/helpers/getAqiColor';
import { getAirQualityData } from 'src/features/airQuality/selectors/airQualitySelector';
import { isObjectEmpty } from 'src/common/helpers/isObjectEmpty';

export const AqiContainerRaw = ({ aqiData }) => (
    <>
        {!isObjectEmpty(aqiData) && (
            <DataTile
                name="AQI"
                value={aqiData.data.aqi}
                unit={aqiData.data.dominentpol.toUpperCase()}
                bgColor={getAqiColor(parseInt(aqiData.data.aqi, 10))}
            />
        )}
    </>
);

const mapStateToProps = state => ({
    aqiData: getAirQualityData(state),
});

export const AqiContainer = connect(mapStateToProps)(AqiContainerRaw);
