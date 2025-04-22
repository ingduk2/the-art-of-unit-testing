function verifyPassword(password, options, dayOfWeek) {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        throw new Error("It's the weekend!");
    }

    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }

    if (options.includes('uppercase') && !/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one uppercase letter.');
    }

    return true;
}

module.exports = {
    verifyPassword,
};
