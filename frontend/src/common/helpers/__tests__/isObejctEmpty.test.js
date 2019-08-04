import { isObjectEmpty } from '../isObjectEmpty';

describe('isObjectEmpty', () => {
    it('should return true for empty object', () => {
        const mockObject = {};
        expect(isObjectEmpty(mockObject)).toBe(true);
    });

    it('should return false for non empty object', () => {
        const mockObject = {
            first: true,
            second: 'param',
        };
        expect(isObjectEmpty(mockObject)).toBe(false);
    });
});
