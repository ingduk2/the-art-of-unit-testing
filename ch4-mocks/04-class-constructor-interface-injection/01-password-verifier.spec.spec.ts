import { PasswordVerifier2 } from "./01-password-verifier";
import { IComplicatedLogger } from "./interfaces/complicated-logger";

describe("working with long interfaces", () => {
    describe("password verifier", () => {
        class FakeComplicatedLogger implements IComplicatedLogger {
            infoWritten = "";
            debugWritten = "";
            errorWritten = "";
            warnWritten = "";

            info(text: string) {
                this.infoWritten = text;
            }
            debug(text: string, obj: any) {
                this.debugWritten = text;
            }
            warn(text: string) {
                this.warnWritten = text;
            }
            error(text: string, location: string, stacktrace: string) {
                this.errorWritten = text;
            }
        }

        test("verify passing, with logger, calls logger with PASS", () => {
            const mockLog = new FakeComplicatedLogger();

            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify("anything");
            
            expect(mockLog.infoWritten).toMatch(/PASSED/);
        });

        test("A more JS oriented variation on this test", () => {
            const mockLog = {} as IComplicatedLogger;
            let logged = "";
            mockLog.info = (text) => (logged = text);
            
            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify("anything");
            
            expect(logged).toMatch(/PASSED/);
        });
    });
});