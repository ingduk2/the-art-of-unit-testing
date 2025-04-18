import { getUserCache, IUserCache, IUserDetails } from './shardedUserCache';

export class SpecialApp {
    loginUser(key: string, pass: string): boolean {
        const cache: IUserCache = getUserCache();
        const foundUser: IUserDetails = cache.getUser(key);
        if (foundUser?.password === pass) {
            return true;
        }
        return false;
    }
}
