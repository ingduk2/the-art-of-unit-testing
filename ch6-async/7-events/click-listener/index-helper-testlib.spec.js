/**
 * @jest-environment jsdom
 */
const path = require('path');
const fs = require('fs');
require('./index-helper.js');

const { fireEvent, findByText, getByText } = require('@testing-library/dom');

const loadHtml = (fileRelativePath) => {
    const filePath = path.join(__dirname, "index.html");
    const innerHTML = fs.readFileSync(filePath);
    document.documentElement.innerHTML = innerHTML;
    return document.documentElement;
}

const loadHtmlAndGetUIElements = () => {
    const docElem = loadHtml("index.html");
    const button = getByText(docElem, "Click Me", { exact: false });
    return { window, docElem, button };
};

describe("index helper", () => {
    test("dom test lib button click triggers change in page", () => {
        const { window, docElem, button } = loadHtmlAndGetUIElements();

        fireEvent.load(window);
        fireEvent.click(button);

        expect(findByText(docElem, "Clicked", { exact: false })).toBeTruthy();
    });
});