const { describe } = require('node:test');
const { verify } = require('./password-verifier-time01');

const { SATURDAY, SUNDAY, MONDAY } = require('./password-verifier-time01');
// factory method demo
const { makeVerifier } = require('./password-verifier-time01');

describe('verifier', () => {
    test('factory method: on weekends, throws exceptions', () => {
        const alwaysSunday = () => SUNDAY;
        const verifyPassword = makeVerifier([], alwaysSunday);

        expect(() => verifyPassword('anything')).toThrow("It's the weekend!");
    });
})