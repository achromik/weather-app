import React, { useState } from 'react';
import { Button, Alert, Icon } from 'antd';

import { SectionWrapper } from 'src/common/components/SectionWrapper';
import { TargetPointerGPS } from 'src/common/components/TargetPointerGPS';

export const GetLocation = ({ onSuccess }) => {
    const [active, setActive] = useState(true);
    const [geoError, setGeoError] = useState('');
    const navGeo = navigator.geolocation;

    const handleGetLocation = () => {
        if (!navGeo) {
            setGeoError('Geolocation is not supported by your browser.');
            return;
        }

        setActive(false);
        setGeoError('');
        navGeo.getCurrentPosition(
            position => {
                setActive(true);
                onSuccess({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            err => {
                setActive('true');
                setGeoError(err.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 0,
            },
        );
    };

    return (
        <SectionWrapper>
            <Button
                type="primary"
                shape="round"
                onClick={handleGetLocation}
                loading={!active}
                style={{ width: '200px' }}
                size="large"
            >
                {active && <Icon component={TargetPointerGPS} style={{ width: '16px' }} />}
                Current location
            </Button>

            {geoError && <Alert message="Error" description={geoError} type="error" showIcon />}
        </SectionWrapper>
    );
};
