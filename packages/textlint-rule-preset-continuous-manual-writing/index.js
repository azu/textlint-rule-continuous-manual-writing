// LICENSE : MIT
"use strict";
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length"),
        "max-comma": require("textlint-rule-max-comma"),
        "max-ten": require("textlint-rule-max-ten")
    },
    rulesConfig: {
        // 文長は90文字以下とする
        "sentence-length": {
            max: 90
        },
        //コンマと読点は1文中に4つまで
        "max-comma": {
            max: 4
        },
        "max-ten": {
            max: 4
        }
    }
};