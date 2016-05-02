// LICENSE : MIT
"use strict";
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length"),
        "max-comma": require("textlint-rule-max-comma")
    },
    rulesConfig: {
        // 文長は90文字以下とする
        "sentence-length": {
            max: 90
        },
        // コンマは1文中に4つまで
        "textlint-rule-max-comma":{
            max: 4
        }
    }
};