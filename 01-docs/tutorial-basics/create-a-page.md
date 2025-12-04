---
sidebar_position: 1
---

# ページの作成

**MarkdownまたはReact**ファイルを`src/pages`に追加して、**スタンドアロンページ**を作成します。

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 最初のReactページを作成する

次のパスにファイルを作成します`src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```


新しいページが次の場所で利用できるようになりました。[http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## 最初のMarkdownページを作成する

次のパスにファイルを作成します`src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```


新しいページが次の場所で利用できるようになりました。[http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
