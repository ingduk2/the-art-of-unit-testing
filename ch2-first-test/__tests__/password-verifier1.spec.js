const { PasswordVerifier1 } = require('../password-verifier1');

const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({ passed: true, reason: '' });
const makeVerifierWithPassingRule = () => {
    const verifier = makeVerifier();
    verifier.addRule(passingRule);
    return verifier;
};

const makeVerifierWithFailedRule = (reason) => {
    const verifier = makeVerifier();
    const fakeRule = () => ({ passed: false, reason: reason });
    verifier.addRule(fakeRule);
    return verifier;
};

test('pass verifier,with failed rule, ' +
    'has an error message based on the rule.reason', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        const errors = verifier.verify('any input');
        expect(errors[0]).toContain('fake reason');
});

test('pass verifier, with failed rule, has exactly one error', () => {
    const verifier = makeVerifierWithFailedRule('fake reason');
    const errors = verifier.verify('any input');
    expect(errors.length).toBe(1);
});

test('pass verifier, with a passing rule, has no errors', () => {
    const verifier = makeVerifierWithPassingRule();
    const errors = verifier.verify('any input');
    expect(errors.length).toBe(0);
});

test('pass verifier, with passing and failing rule, ' + 'has one error', () => {
    const verifier = makeVerifierWithFailedRule('fake reason');
    verifier.addRule(passingRule);
    const errors = verifier.verify('any input');
    expect(errors.length).toBe(1);
});

test('pass verifier, with passing and failing rule, ' +
    'error text belongs to failed rule', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        verifier.addRule(passingRule);
        const errors = verifier.verify('any input');
        expect(errors[0]).toContain('fake reason');
});

test('verify, with no rules, throws exception', () => {
    const verifier = makeVerifier();
    try {
        verifier.verify('any input');
        fail('error was expected but not thrown');
    } catch (e) {
        expect(e.message).toContain('no rules configured');
    }
});

test('verify, with no rules, throws exception', () => {
    const verifier = makeVerifier();
    try {
        verifier.verify('any input');
        fail('error was expected but not thrown');
    } catch (e) {
        expect(e.message).toContain('no rules configured');
    }
});

test('verify, with no rules, throws exception', () => {
    const verifier = makeVerifier();
    expect(() => verifier.verify('any input'))
        .toThrowError(/no rules configured/);
});