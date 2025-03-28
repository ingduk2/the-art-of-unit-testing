const moment = require('moment');
const { verifyPassword } = require('./password-verifier-time00');
const { verifyPassword2 } = require('./password-verifier-time00');

const SUNDAY = 0;
const SATURDAY = 6;

describe('verifier', () => {
    const TODAY = moment().day();

    test('on weekends, throws exceptions', () => {
        if ([SATURDAY, SUNDAY].includes(TODAY)) {
            expect(() => verifyPassword('anything', [])).toThrowError(
                "It's the weekend!"
            );
        }
    });

    if ([SATURDAY, SUNDAY].includes(TODAY)) {
        test('on a weekend, throws an error', () => {
            expect(() => verifyPassword('anything', [])).toThrow("It's the weekend!");
        })
    }
});

describe('verifier2 - dummy object', () => {
    const TODAY = moment().day();

    test('on weekends, throws exceptions', () => {
        expect(() => verifyPassword2('anything', [], SUNDAY)).toThrowError(
            "It's the weekend!"
        );
    });
});

