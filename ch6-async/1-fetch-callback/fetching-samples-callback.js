// 콜백 버전
const isWebsiteAlive = (callback) => {
    const website = "http://example.com";
    fetch(website)
        .then(throwOnInvalidResponse)
        .then((response) => response.text())
        .then((text) => {
            processFetchSuccess(text, callback);
        })
        .catch((err) => {
            processFetchError(err, callback);
        })
};

const throwOnInvalidResponse = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const processFetchSuccess = (text, callback) => {
    if (text.includes("illustrative")) {
        callback({ success: true, status: "ok" });
    } else {
        callback({ success: false, status: "missing text" });
    }
}

const processFetchError = (err, callback) => {
    callback({ success: false, status: err });
}

module.exports = {
    isWebsiteAlive,
    processFetchSuccess,
    processFetchError
};
