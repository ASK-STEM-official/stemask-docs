---
sidebar_position: 3
---

# ブログ投稿を作成する

Docusaurusは、ブログ投稿ごとにページを作成しますが、ブログインデックスページ、タグシステム、RSSフィードなども作成します。

## 最初の投稿を作成する

次のパスにファイルを作成`blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

新しいブログ投稿が次の場所で公開されています。[http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
