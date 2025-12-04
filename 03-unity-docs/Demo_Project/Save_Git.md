---
sidebar_position: 3
description: この章を読む前に
---

# Gitで保存する

ここでGitを使って保存する方法について説明していきます。

## 1.VSCodeを起動する

まずはGitを使うためにVSCodeを起動します。

VSCodeを開いたら、Gitのセットアップで作ったフォルダを開きます。

左上の「ファイル(F)」から「フォルダーを開く… 」を選択し、[Git,GitHub](https://ask-stem-official.github.io/stemask-docs/unity-docs/build-env/setup_Git)の準備の最後で作ったフォルダを選んでください。

左側にある「ソース管理」のアイコンに数字が付いてたり、Git関連の通知が来てたりしたら当たりです。

## 2.gitignoreの設定

この時点でGitを使うことは可能ですが、先にやるべき設定があります。

Gitではファイルの状態を保存できるのですが、「どのファイルを保存するのか」という設定があります。

試しにソース管理のメニューを開くとGitがとんでもない量のファイルを保存しようとしており、これを必要な分だけのファイルだけに減らす必要があります。

![Ut8](./images/8.jpg)

とんでもない量のファイル(１万)。

これは主にLibraryフォルダとかいうヤツのせいなのですが、既にこれを解決できる設定が公開されているので、ありがたく使わせていただきましょう。

https://github.com/github/gitignore/blob/main/Unity.gitignore

Unityのプロジェクトフォルダ(Assetsとかがあるとこ)に「<font color="yellow">.gitignore</font>」というファイルを作り、先ほどのリンクのファイルをコピペすれば設定完了です。うまくいけば保存されるファイルの数が一気に２桁とかに減っているはずです。