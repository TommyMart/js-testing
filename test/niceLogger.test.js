const {niceLogger} = require("../src/niceLogger.js")


test("niceLogger return Hello world", () => {

    expect(niceLogger()).toBe("Hello world!");
});