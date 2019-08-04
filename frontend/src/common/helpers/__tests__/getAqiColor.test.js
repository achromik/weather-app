import { aqiColors } from 'src/config/variables';
import { getAqiColor } from 'src/common/helpers/getAqiColor';

describe('getAgiColor', () => {
    it('should handle color for good aqi - 0 < aqi <= 50', () => {
        expect(getAqiColor(49)).toBe(aqiColors.good);
    });
    it('should handle color for moderate aqi - 50 < aqi <= 100', () => {
        expect(getAqiColor(88)).toBe(aqiColors.moderate);
    });
    it('should handle color for unhealthy sensitive aqi - 100 < aqi <= 150', () => {
        expect(getAqiColor(149)).toBe(aqiColors.unhealthySensitive);
    });
    it('should handle color for unhealthy aqi - 150 < aqi <= 200', () => {
        expect(getAqiColor(189)).toBe(aqiColors.unhealthy);
    });
    it('should handle color for good very unhealthy - 200 < aqi <= 300', () => {
        expect(getAqiColor(249)).toBe(aqiColors.veryUnhealthy);
    });
    it('should handle color for  aqi hazardous -  aqi > 300', () => {
        expect(getAqiColor(350)).toBe(aqiColors.hazardous);
    });
});
