const { verifyPassword } = require('./verifyPassword');

describe('verifier2 - dummy object', () => {
    test('on weekends, throws exceptions', () => {
        const SUNDAY = 0;
        const NO_RULES = [];
        expect(() => verifyPassword('jhGGu78!', NO_RULES, SUNDAY)).toThrow(
            "It's the weekend!"
        );
    });
});
