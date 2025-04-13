const Samples = require('./timing-samples');

describe("calculate with intervals", () => {
    beforeEach(() => jest.clearAllTimers());
    beforeEach(() => jest.useFakeTimers());

    test("calculate, incr input/output, calculates correctly", () => {
        let xInput = 1;
        let yInput = 2;
        const inputFn = () => ({ x: xInput++, y: yInput++ });

        const results = [];
        Samples.calculate2(inputFn, (result) => results.push(result));

        jest.advanceTimersToNextTimer();
        jest.advanceTimersToNextTimer();

        expect(results[0]).toBe(3);
        expect(results[1]).toBe(5);
    })
});