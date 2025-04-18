import Substitute from '@fluffy-spoon/substitute';
import { IComplicatedLogger } from './interfaces/complicated-logger';
import { PasswordVerifier2 } from './00-password-verifier.v2';

describe('password verifier (ctor change)', () => {
    const makeFakeLogger = () => {
        return Substitute.for<IComplicatedLogger>();
    };

    const makePasswordVerifier = (
        rules: ((input) => boolean)[],
        fakeLogger: IComplicatedLogger = makeFakeLogger()
    ) => {
        return new PasswordVerifier2(rules, fakeLogger);
    };

    it('passws with zero rules', () => {
        const verifier = makePasswordVerifier([]);

        const result = verifier.verify('any input');

        expect(result).toBe(true);
    });

    it('failes with single failing rule', () => {
        const failingRule = (input) => false;
        const verifier = makePasswordVerifier([failingRule]);

        const result = verifier.verify('any input');

        expect(result).toBe(false);
    });
});
