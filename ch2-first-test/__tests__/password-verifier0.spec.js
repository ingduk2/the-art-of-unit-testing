const { verifyPassword } = require('../password-verifier0');

test('verifyPassword, given a failing rule, returns errors', () => {
    const fakeRule = input => ({ passed: false, reason: 'fake reason' });

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toContain('fake reason'); 
})

describe('verifyPassword', () => {
    test('given a failing rule, returns errors', () => {
        const fakeRule = input => ({ passed: false, reason: input });

        const errors = verifyPassword('any value', [fakeRule]);

        expect(errors[0]).toContain('any value'); 
    });
});

describe('verifyPassword', () => {
    describe('with a failing rule', () => {
        test('returns errors', () => {
            const fakeRule = () => ({ passed: false, reason: 'fake reason' });

            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});

describe('verifyPassword', () => {
    describe('with a failing rule', () => {
        const fakeRule = () => ({ passed: false, reason: 'fake reason' });

        test('returns errors', () => {
            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});

describe('verifyPassword', () => {
    describe('with a failing rule', () => {
        it('returns errors', () => {
            const fakeRule = () => ({ passed: false, reason: 'fake reason' });

            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});