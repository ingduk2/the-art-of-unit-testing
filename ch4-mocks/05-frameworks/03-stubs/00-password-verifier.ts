import { IComplicatedLogger } from './interfaces/complicated-logger';
import { MaintenanceWindow } from './maintenenca-window';

export class PasswordVerifier3 {
    private _rules: any[];
    private _logger: IComplicatedLogger;
    private _maintenanceWindow: MaintenanceWindow;

    constructor(
        rules: any[],
        logger: IComplicatedLogger,
        maintenenceWindow: MaintenanceWindow
    ) {
        this._rules = rules;
        this._logger = logger;
        this._maintenanceWindow = maintenenceWindow;
    }

    verify(input: string): boolean {
        if (this._maintenanceWindow.isUnderMaintenance()) {
            this._logger.info("Under Maintenance", "verify");
            return false;
        }

        const failed = this._rules
            .map((rule) => rule(input))
            .filter((result) => result === false);

        if (failed.length === 0) {
            this._logger.info("PASSED", "verify");
            return true;
        }

        this._logger.info("FAIL", "verify");
        return false;
    }
}