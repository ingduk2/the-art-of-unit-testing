import { getUserCache } from './shardedUserCache';
import { SpecialApp } from './specialApp';

const addDefaultUser = () => {
    getUserCache().addUser({
        key: 'a',
        password: 'abc',
    });
};

const makeSpecialApp = () => new SpecialApp();

describe('Test Dependence v2', () => {
    beforeEach(() => getUserCache().reset());

    describe('user cache', () => {
        test('can only add cache use once', () => {
            addDefaultUser();

            expect(() => addDefaultUser()).toThrow('already exists');
        });
    });

    describe('loginUser with loggedInUser', () => {
        test('user exists, login succeeds', () => {
            addDefaultUser();
            const app = makeSpecialApp();

            const result = app.loginUser('a', 'abc');
            expect(result).toBe(true);
        });

        test('user missing, login failes', () => {
            const app = makeSpecialApp();

            const result = app.loginUser('a', 'abc');
            expect(result).toBe(false);
        });
    });
});
