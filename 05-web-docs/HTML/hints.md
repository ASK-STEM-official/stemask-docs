---
sidebar_position: 1
description: HTMLの便利な書き方/便利なもの
---
# HTMLの便利な書き方/便利なもの
この章では、HTMLを書くときの便利な書き方や、便利な機能を紹介します。

みなさんは、HTMLを書くときに、```<html>```や```<head>```などの基本的な構造を毎回書いているでしょうか？実は、VSCodeを使うと、これらの基本的な構造を簡単に生成することができます。

## 便利な書き方
なんと、VSCodeでは、HTMLに強力な補完機能が実装されています。例えば、```!```と入力してEnterを押すと、HTMLの基本的な構造が自動で生成されます。
生成されるものは以下の通り。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

このように、VSCodeの補完機能を活用することで、HTMLを書く際の手間を大幅に減らすことができます。

## タグの補完
VSCodeでは、タグの補完も非常に便利です。例えば、```div```と入力してEnterを押すと、以下のようなコードが自動で生成されます。
```html
<div></div>
```

さらに、同じタグを複数用意するとき、(aタグやdivなど)は、```a*3```や```div*2```のように入力してEnterを押すと、指定した数だけタグが生成されます。

```a*3```
```html
<a href=""></a>
<a href=""></a>
<a href=""></a>
```
```div*2```
```html
<div></div>
<div></div>
```