import { makeQueryParams } from 'src/common/helpers/makeQueryParams';

describe('makeQueryParams', () => {
    it('should return query string', () => {
        const mockParams = {
            first: 'one',
            second: 200,
            third: true,
        };
        expect(makeQueryParams(mockParams)).toBe('first=one&second=200&third=true');
    });
});
