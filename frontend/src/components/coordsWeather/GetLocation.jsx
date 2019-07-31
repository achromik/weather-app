import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Alert, Icon } from 'antd';

import { SectionWrapper } from 'src/common/components/SectionWrapper';
import { fetchLocationWeather } from 'src/features/weather/actions/weatherActions';
import { TargetPointerGPS } from 'src/common/components/TargetPointerGPS';

export const GetLocationRaw = ({ fetchLocationWeather }) => {
    const navigatorGeolocation = !!navigator.geolocation;

    const handleGetLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetchLocationWeather({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            err => {
                console.log(err);
            },
            {
                enableHighAccuracy: false,
                timeout: Infinity,
                maximumAge: 0,
            },
        );
    };

    return (
        <SectionWrapper>
            {navigatorGeolocation && (
                <Button type="primary" shape="round" onClick={handleGetLocation}>
                    <Icon component={TargetPointerGPS} style={{ maxWidth: '15px' }} />
                    Current location
                </Button>
            )}
            {!navigatorGeolocation && (
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
            )}
        </SectionWrapper>
    );
};

export const GetLocation = connect(
    () => ({}),
    { fetchLocationWeather },
)(GetLocationRaw);
