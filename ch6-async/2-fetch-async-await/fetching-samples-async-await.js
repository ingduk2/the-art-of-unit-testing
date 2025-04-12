const isWebsiteAlive = async () => {
    try {
        const resp = await fetch("http://example.com");
        throwIfResponseNotOK(resp);
        const text = await resp.text();
        return processFetchContent(text);
    } catch (err) {
        return processFetchError(err);
    }
}

const throwIfResponseNotOK = (resp) => {
    if (!resp.ok) {
        throw resp.statusText;
    }
}

const processFetchContent = (text) => {
    const included = text.includes("illustrative");
    if (included) {
        return { success: true, status: "ok" };
    }
    return {success: false, status: "missing text" };
}

const processFetchError = (err) => {
    throw err;
}

module.exports = {
    isWebsiteAlive,
    processFetchContent,
    processFetchError,
};