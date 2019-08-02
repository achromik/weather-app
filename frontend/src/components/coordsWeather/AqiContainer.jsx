import React from 'react';
import { connect } from 'react-redux';

import { DataTile } from 'src/common/components/DataTile';
import { getAqiColor } from 'src/common/helpers/getAqiColor';
import { getAirQualityData } from 'src/features/airQuality/selectors/airQualitySelector';

export const AqiContainerRaw = ({ aqiData }) => (
    <>
        {aqiData && (
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
