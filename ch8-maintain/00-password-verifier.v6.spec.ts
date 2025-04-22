import { PasswordVerifier6 } from './00-password-verifier.v6';

describe('verifier 6', () => {
    test('over specify string', () => {
        const pv6 = new PasswordVerifier6([(input) => input.includes('abc')]);

        pv6.verify(['a', 'ab', 'abc', 'abcd']);

        const msg = pv6.getMsg();
        expect(msg).toBe('you have 2 failed rules.');
    });

    // 더 나은 테스트 작성 방법
    test('more future proof string checking', () => {
        const pv6 = new PasswordVerifier6([(input) => input.includes('abc')]);

        pv6.verify(['a', 'ab', 'abc', 'abcd']);

        const msg = pv6.getMsg();
        expect(msg).toMatch(/2 failed/);
    });
});
