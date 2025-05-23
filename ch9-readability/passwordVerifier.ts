import { IComplicatedLogger } from './interfaces/complicated-logger';

export class PasswordVerifier {
    private _rules: any[];
    private _logger: IComplicatedLogger;

    constructor(rules: any[], logger: IComplicatedLogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string): boolean {
        const failed = this._rules
            .map((rule) => rule(input))
            .filter((result) => result === false);

        if (failed.length === 0) {
            this._logger.info('PASSED', 'verify');
            return true;
        }

        this._logger.info('FAIL', 'verify');
        return false;
    }
}
