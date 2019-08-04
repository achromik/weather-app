import { sentenceCase } from '../sentenceCase';

describe('sentenceCase', () => {
    it('should return first letter capitalized string', () => {
        expect(sentenceCase('UPPERCASE TEST SENTENCE')).toBe('Uppercase test sentence');
        expect(sentenceCase('lowercase sentence')).toBe('Lowercase sentence');
        expect(sentenceCase('mIxEd LeTtErS')).toBe('Mixed letters');
    });
});
