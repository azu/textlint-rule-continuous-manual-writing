// LICENSE : MIT
"use strict";
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length"),
        "max-comma": require("textlint-rule-max-comma"),
        "max-ten": require("textlint-rule-max-ten"),
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu"),
        "no-start-duplicated-conjunction": require("textlint-rule-no-start-duplicated-conjunction"),
        "no-doubled-conjunction": require("textlint-rule-no-doubled-conjunction"),
        "no-dropping-the-ra": require("textlint-rule-no-dropping-the-ra")

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
        "no-mix-dearu-desumasu": true,
        // 正式な送り仮名を使用する ら抜き言葉を使用しない
        "no-dropping-the-ra": true,
        // 同じ表現から文を開始しすぎない
        // - 同じ文から始めない
        "no-start-duplicated-conjunction": {
            "interval": 2
        },
        // - 同じ接続詞を連続させない
        "no-doubled-conjunction": true

    }
};