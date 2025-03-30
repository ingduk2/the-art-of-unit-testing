const { SUNDAY, PasswordVerifier } = require('./password-verifier-time02');

function FakeTimeProvider(fakeDay) {
    this.getDay = function() {
        return fakeDay;
    }
}

describe('refactoredwith constructor', () => {
    test('class constructor: on weekends, throws exceptions', () => {
        const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));
        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });
});