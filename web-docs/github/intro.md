---
sidebar_position: 1
description: GitHub Pagesを使ってみよう
---

# GitHub Pagesとは?
GitHub Pagesは、GitHubのリポジトリを参照してWebページをホスティングしてくれるサービスです。無料で利用できます。

## 制約
### フロントエンドしかかけない
サーバーサイドはわれらがGitHubが管理してるのでJavaを書かせてもらえませんでした。(by 業務用ITソフトウェア班員)
### index.htmlがいる
まじりっ気のないGitHub Pagesはindex.htmlを基準に動くのでindex.htmlがないと動作しません。
### ほかにも
帯域制限があったり、ファイルサイズ縛りがあったりします。

## GitHub Pagesの使い方
早速使ってみましょう
### 用意するもの
- GitHubのアカウント
- VSCodeとGitの入ったPC
- ブラウザ(筆者はGoogle Chrme)

### リポジトリの用意
publicリポジトリをGitHubで作成します。VSCode上で作成する場合は中身を勝手にコミットしてくれます。GitHub上で作る場合はReadMe.mdを作成しておくか、ファイルのアップロード機能でアップロードしてください。

あとはindex.htmlを用意して編集するだけです。GitHubにプッシュしたときにActionが実行されるタイプのやつです。
CSSはほとんど動作します。JSだけ動かない構文があります。アニメーションとかは動いてました。