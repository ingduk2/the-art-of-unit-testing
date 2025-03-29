const { describe } = require('node:test');
const {
    inject,
    verifyPassword,
    SATURDAY,
} = require('./password-verifier-time00-modular');

const injectDate = (newDay) => {
    const reset = inject({
        moment: function () {
            return {
                day: () => newDay,
            };
        },
    });

    return reset;
};

describe('verifyPassword', () => {
    describe('when its the weekend', () => {
        it('throws an error', () => {
            const reset = injectDate(SATURDAY);

            expect(() => verifyPassword('any input')).toThrowError(
                "It's the weekend!"
            );

            reset();
        });
    });
});