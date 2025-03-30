import { PasswordVerifier, SUNDAY } from "./password-verifier-time03";
import { TimeProviderInterface } from "./time-provider-interface";

class FakeTimeProvider implements TimeProviderInterface {
    fakeDay: number;
    getDay(): number {
        return this.fakeDay;
    }
}

describe('password verifier with interfaces', () => {
    test('on wekends, throws exceptions', () => {
        const stubTimeProvider = new FakeTimeProvider();
        stubTimeProvider.fakeDay = SUNDAY;
        const verifier = new PasswordVerifier([], stubTimeProvider);
        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });
})