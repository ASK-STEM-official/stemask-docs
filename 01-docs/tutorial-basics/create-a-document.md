---
sidebar_position: 2
---

# ドキュメントの作成

ドキュメントは**複数のページ**で構成されており、次の方法でアクセス出来ます。

- **サイドバー**
- **前/次のナビゲーション**
- **バージョン管理**

## 最初のドキュメントを作成する

次のパスにマークダウンファイルを作成 `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

新しいドキュメントは次の場所で入手できます。 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## サイドバーを構成する

Docusaurusは`docs`フォルダーから自動的に**サイドバーを作成**します。

メタデータを追加してサイドバーのラベルと位置をカスタマイズします。

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my**first Docusaurus document**!
```


`sidebars.js`でサイドバーを明示的に作成することもできます。

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
