import Substitute, { Arg } from '@fluffy-spoon/substitute';
import { IComplicatedLogger } from './interfaces/complicated-logger';
import { PasswordVerifier } from './passwordVerifier';

describe('password verifier', () => {
    test('verify, with logger & passing, calls logger with PASS', () => {
        const mockLog = Substitute.for<IComplicatedLogger>();

        const verifier = new PasswordVerifier([], mockLog);
        verifier.verify('anything');

        mockLog.received().info(
            Arg.is((x) => x.includes('PASSED')),
            'verify'
        );
    });
});
