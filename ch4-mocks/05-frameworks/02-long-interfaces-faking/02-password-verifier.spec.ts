import { IComplicatedLogger } from './interfaces/complicated-logger';
import { PasswordVerifier } from './00-password-verifier';
import { Substitute, Arg } from '@fluffy-spoon/substitute';

describe('working with long interfaces', () => {
    describe('password verifier', () => {
        test('verify, with logger and passing, calls logger with PASS', () => {
            const mockLog = Substitute.for<IComplicatedLogger>();

            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('anything');

            mockLog.received().info(
                Arg.is((x) => x.includes('PASSED')),
                'verify'
            )
        });
    });
});