---
sidebar_position: 1
---

# ドキュメントのバージョンを管理する

Docusaurusはキュメントの複数のバージョンを管理できます。

## ドキュメントバージョンを作成する

プロジェクトのバージョン1.0をリリースします。

```bash
npm run docusaurus docs:version 1.0
```

「docs」フォルダーが「versioned_docs/version-1.0」にコピーされ、「versions.json」が作成されます。

ドキュメントには2つのバージョンがあります。

- 今後のリリース予定のドキュメントは(http://localhost:3000/docs/)のcurrentを参照してください <!-- 翻訳案募集 -->

## バージョンドロップダウンを追加

バージョン間をシームレスに移動するには、バージョンのドロップダウンを追加します。

`docusaurus.config.js` ファイルを修正する。

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

ドキュメント バージョンのドロップダウンがナビゲーションバーに表示されます。

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 既存のバージョンを更新する

バージョン管理されたドキュメントは、それぞれのフォルダーで編集できます。

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
