// 콜백 버전
const isWebsiteAliveWithCallback = (callback) => {
    const website = "http://example.com";
    fetch(website)
        .then((response) => {
            if (!response.ok) {
                // 이 네트워크 문제를 어떻게 테스트할 수 있을까?
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.text())
        .then((text) => {
            if (text.includes("illustrative")) {
                callback({ success: true, status: "ok" });
            } else {
                // 이 경로를 어떻게 테스트할 수 있을까?
                callback({ success: false, status: "text missing" });
            }
        })
        .catch((err) => {
            // 이 종료점을 어떻게 테스트할 수 있을까?
            callback({ success: false, status: err });
        })
};

// async/await 버전
const isWebsiteAliveWithAsyncAwait = async() => {
    try {
        const resp = await fetch("http://example.com");
        if (!resp.ok) {
            // 비정상적인 응답을 어떻게 테스트할 수 있을까?
            throw resp.statusText;
        }
        const text = await resp.text();
        const included = text.includes("illustrative");
        if (included) {
            return { success: true, status: "ok" };
        }
        // 다른 웹 사이트 콘텐츠를 어떻게 테스트할 수 있을까?
        throw "text missing";
    } catch (err) {
        return { success: false, status: err };
    }
};

module.exports = {
    isWebsiteAliveWithAsyncAwait,
    isWebsiteAliveWithCallback,
};