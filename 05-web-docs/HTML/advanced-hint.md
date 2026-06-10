---
sidebar_position: 2
description: もっと高度な補完機能や、Emmetの便利な機能を紹介します。
---

# もっと高度な補完
この章では、VSCodeのもっと高度な補完機能や、Emmetの便利な機能を紹介します。

## Emmetとは
そもそもEmmetとは、HTMLやCSSを書くときに便利な機能を提供するツールです。VSCodeにはEmmetが組み込まれているため、いろいろと便利な補完が使えるのです。

インターネットでEmmetについて調べると、様々な機能が紹介されています。調べてみると面白いよ。

## よく使うやつらの紹介
```ul>li*3```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```div#header```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<div id="header"></div>
```

```div.container```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<div class="container"></div>
```

上記の応用で、```div#header.container```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<div id="header" class="container"></div>
```

cssのリンクも手で打つとスペルミスが起きそうで怖いですが、Emmetを用いることで簡単に生成できます。```link:css```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<link rel="stylesheet" href="">
```