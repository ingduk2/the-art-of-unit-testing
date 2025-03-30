const makeVerifier = (rules, logger) => {
    return (input) => {
        const failed = rules
            .map(rule => rule(input))
            .filter(result => result === false);

        if (failed.length === 0) {
            logger.info("PASSED");
            return true;
        }

        logger.info("FAIL");
        return false;       
    }
};

module.exports = {
    makeVerifier,
};