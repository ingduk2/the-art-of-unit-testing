const samples = require('./fetching-samples-async-await');

describe('website up check', () => {
    test('on fetch success with good content, returns true', () => {
        const result = samples.processFetchContent('illustrative');
        expect(result.success).toBe(true);
        expect(result.status).toBe('ok');
    });

    test('on fetch success with bad content, returns false', () => {
        const result = samples.processFetchContent('text not on site');
        expect(result.success).toBe(false);
        expect(result.status).toBe('missing text');
    });

    test('on fetch fail, throws', () => {
        expect(() => samples.processFetchError('error text'))
            .toThrow('error text');
    });
});