// LICENSE : MIT
"use strict";
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length")
    },
    rulesConfig: {
        "sentence-length": {
            max: 90
        }
    }
};