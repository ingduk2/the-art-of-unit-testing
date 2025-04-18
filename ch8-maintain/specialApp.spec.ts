import { getUserCache } from './shardedUserCache';
import { SpecialApp } from './specialApp';

describe('Test Dependence', () => {
    describe('loginUser with loggedInUser', () => {
        test('no user, login failes', () => {
            const app = new SpecialApp();
            const result = app.loginUser('a', 'abc');
            expect(result).toBe(false);
        });
    });

    test('can only cache each user once', () => {
        getUserCache().addUser({
            key: 'a',
            password: 'abc',
        });

        expect(() =>
            getUserCache().addUser({
                key: 'a',
                password: 'abc',
            })
        ).toThrow('already exists');
    });

    test('user exists, login succeeds', () => {
        const app = new SpecialApp();
        const result = app.loginUser('a', 'abc');
        expect(result).toBe(true);
    });
});
