---
sidebar_position: 5
---

# サイトを展開する

Docusaurusは**静的サイトジェネレーター**(**[Jamstack](https://jamstack.org/)**とも呼ばれます)です。

サイトは単純な**静的HTML、JavaScript、CSSファイル**として構築されます。

## あなたのサイトをビルドする

**実稼働用**のサイトをビビルドします

```bash
npm run build
```

静的ファイルは「build」フォルダー内に生成されます。

## サイトを展開する

実稼働ビルドをローカルでテストします。

```bash
npm run serve
```

「build」フォルダーは現在、この場所にあります。[http://localhost:3000/](http://localhost:3000/).

「build」フォルダーを**ほぼどこにでも**簡単に、**無料**、または非常に低コストでデプロイできるようになりました(**[デプロイメントガイド](https://docusaurus.io/docs/deployment)*を読んでください)。