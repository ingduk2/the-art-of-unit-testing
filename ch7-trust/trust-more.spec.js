const trust = require('./trust');

it ("returns correct greeting for name", () => {
    const result = trust.makeGreeting("abc");
    expect(result).toBe("helloabc");
});