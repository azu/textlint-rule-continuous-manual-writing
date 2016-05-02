// LICENSE : MIT
"use strict";
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length"),
        "max-comma": require("textlint-rule-max-comma"),
        "max-ten": require("textlint-rule-max-ten"),
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu")
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
        },
        // 二重否定は使用しない
        "no-double-negative-ja": true,
        // ですます調を使用する(「ですます」調と「である」調の混在させない)
        "no-mix-dearu-desumasu": true
    }
};