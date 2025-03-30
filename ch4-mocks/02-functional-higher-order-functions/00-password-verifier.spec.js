const { verifyPassword3 } = require("./00-password-verifier");

describe("password verifier", () => {
    describe("given logger and passing scenario", () => {
        it("calls the logger with PASS", () => {
            let logged = "";
            const mockLog = { info: (text) => (logged = text) };
            const injectedVerify = verifyPassword3([], mockLog);

            injectedVerify("anything");

            expect(logged).toMatch(/PASSED/);
        });
    });
});