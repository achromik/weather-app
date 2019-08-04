import { aqiColors } from 'src/config/variables';

export const getAqiColor = value => {
    switch (true) {
        case value <= 50:
            return aqiColors.good;

        case value <= 100:
            return aqiColors.moderate;

        case value <= 150:
            return aqiColors.unhealthySensitive;

        case value <= 200:
            return aqiColors.unhealthy;

        case value <= 300:
            return aqiColors.veryUnhealthy;

        default:
            return aqiColors.hazardous;
    }
};
