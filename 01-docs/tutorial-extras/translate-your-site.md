---
sidebar_position: 2
---

# サイトを翻訳する

`docs/intro.md`をフランス語にしてみましょう

## i18nを構成する

`docusaurus.config.js`を編集して`fr`ロケールをサポートするようにします:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## ドキュメントの翻訳

`docs/intro.md`ファイルを`i18n/fr`フォルダにコピーします:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md`をフランス語に翻訳します。

## ローカライズされたサイトを開始する

フランス語のロケールでサイトを開始します:

```bash
npm run start -- --locale fr
```

ローカライズされたサイトは [http://localhost:3000/fr/](http://localhost:3000/fr/) でアクセスでき、`Getting Started`ページが翻訳されています。

:::caution

開発中は、一度に1つのロケールしか使用できません。

:::

## ロケールのドロップダウンを追加する

言語をシームレスに切り替えるために、ロケールのドロップダウンを追加します。

`docusaurus.config.js`ファイルを修正します:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

ロケールのドロップダウンがナビゲーションバーに表示されます:

![ロケールのドロップダウン](./img/localeDropdown.png)

## ローカライズされたサイトをビルドする

特定のロケール向けにサイトをビルドします:

```bash
npm run build -- --locale fr
```

または、すべてのロケールを含むサイトを一度にビルドします:

```bash
npm run build
```