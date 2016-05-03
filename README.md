# textlint-rule-continuous-manual-writing

[ドキュメント作成規約](https://github.com/continuous-manual-writing/writing-guideline/blob/master/writing-standard.md "ドキュメント作成規約")のtextlint版です。

> 書籍「ドキュメント作成システム構築ガイド」の第4章で使用したサンプル（執筆規約）です
> -- https://github.com/continuous-manual-writing/writing-guideline

## Installation

- [ ] Describe the installation process

## 規約リスト

規約はトピックごとに存在します。

### 文長に関する規約

| RedPen                   | textlint                        | 補足        |
|--------------------------|---------------------------------|-------------|
| [文長は90文字以下とする] | [textlint-rule-sentence-length] |             |
| [コンマは1文中に4つまで] | [textlint-rule-max-ten]         | 読点（、）  |
|                          | [textlint-rule-max-comma]       | コンマ（,） |


### 表現に関する規約

| RedPen                                                                         | textlint                                        | 補足                                             |
|--------------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------|
| [専門用語の使用をそろえる][]                                                   |                                                 |                                                  |
| [二重否定は使用しない][]                                                       | [textlint-rule-no-double-negative-ja]           |                                                  |
| [不正確な表現（若干、少々、簡単など）を使用しない][]                           |                                                 |                                                  |
| [ですます調を使用する][]                                                       | [textlint-rule-no-mix-dearu-desumasu]           |                                                  |
| [「（の） + 名詞連続 + （の）」パターンを使用しない][]                         |                                                 |                                                  |
| [正式な送り仮名を使用する（ら抜き言葉を使用しない）][]                         | [textlint-rule-no-dropping-the-ra]              |                                                  |
| [一部の漢字についてはひらがな書きを使用する][]                                 |                                                 |                                                  |
| [同じ表現から文を開始しすぎない][]                                             | [textlint-rule-no-start-duplicated-conjunction] | 同じフレーズから始めない                         |
|                                                                                | [textlint-rule-no-doubled-conjunction]          |                                                  |
| [感嘆符、疑問符を使用しない][]                                                 |                                                 |                                                  |
| [章や節の参照には、半角アラビア数字（"第2章"、"第3節"）を使用する][]           | arabic-kanji-numbers                            | [JTFスタイル][] 2.2.2.算用数字と漢数字の使い分け |
| [数字のカウントには半角アラビア数字を含むスタイル（"1つ"、"2つ"）を使用する][] | arabic-kanji-numbers                            | [JTFスタイル][] 2.2.2.算用数字と漢数字の使い分け |
| [漢字連続は最大で5つまで][]                                                    |                                                 |                                                  |
| [半角カナを使用しない][]                                                       | prefer-fullwidth-katakana                       | [JTFスタイル][] 2.1.5.カタカナ                   |
| [アルファベット単語の前後にはスペースを入れない][]                             | no-space-between-halfwidth-characters           | [JTFスタイル][] 3.1.1.全角文字と半角文字の間     |
| [過剰に丁寧な表現を使用しない][]                                               |                                                 |                                                  |
| [弱い表現を使用しない][]                                                       |                                                 |                                                  |
| [冗長な表現を使用しない][]                                                     |                                                 |                                                  |

### シンボルに関する規約

[句読点は”。”と”、”を使用する][]
[式中や引用をのぞき全角シンボルを使用する][]

### 節、パラグラフに関する規約

[節レベルは6まで][]
[節の長さは1500文字まで][]


## Tests

- [ ] Write How to Tests

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT


[文長は90文字以下とする]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L3
[コンマは1文中に4つまで]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L17
[専門用語の使用をそろえる]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L10
[二重否定は使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L28
[不正確な表現（若干、少々、簡単など）を使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/ambiguous-expression.js
[ですます調を使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L21
[「（の） + 名詞連続 + （の）」パターンを使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/doubled_no.js
[正式な送り仮名を使用する（ら抜き言葉を使用しない）]: https://github.com/continuous-manual-writing/book-source/blob/master/js/okurigana.js
[一部の漢字についてはひらがな書きを使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/js/unsuggested-kanji.js
[同じ表現から文を開始しすぎない]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L29
[感嘆符、疑問符を使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_emotional_sentence.js
[章や節の参照には、半角アラビア数字（"第2章"、"第3節"）を使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_anchor_expression.js
[数字のカウントには半角アラビア数字を含むスタイル（"1つ"、"2つ"）を使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_number_expression.js
[漢字連続は最大で5つまで]: https://github.com/continuous-manual-writing/book-source/blob/master/js/long_kanji_chain.js
[半角カナを使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_invalid_kana.js
[アルファベット単語の前後にはスペースを入れない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/space_with_latin_word.js
[過剰に丁寧な表現を使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_too_polite_expressions.js
[弱い表現を使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/japanese_weak_expression.js
[冗長な表現を使用しない]: https://github.com/continuous-manual-writing/book-source/blob/master/js/redundant-ja-expression.js
[句読点は”。”と”、”を使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L6
[式中や引用をのぞき全角シンボルを使用する]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L6
[節レベルは6まで]: https://github.com/continuous-manual-writing/book-source/blob/master/js/section_level_validator.js
[節の長さは1500文字まで]: https://github.com/continuous-manual-writing/book-source/blob/master/redpen-conf.xml#L14

[textlint-rule-sentence-length]: https://github.com/azu/textlint-rule-sentence-length  "azu/textlint-rule-sentence-length: textlint rule that limit Maximum Length of Sentence."
[textlint-rule-max-ten]: https://github.com/azu/textlint-rule-max-ten  "azu/textlint-rule-max-ten: textlint rule that limit maxinum ten(、) count of sentence."
[textlint-rule-max-comma]: https://github.com/azu/textlint-rule-max-comma  "azu/textlint-rule-max-comma: textlint rule is that limit maximum comma(,) count of sentence."