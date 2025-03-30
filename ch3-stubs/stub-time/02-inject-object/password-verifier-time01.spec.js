const { SUNDAY } = require('./password-verifier-time01');

const { PasswordVerifier } = require('./password-verifier-time01');

describe('verifier', () => {
    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = new PasswordVerifier([], alwaysSunday);
        expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
    });
});