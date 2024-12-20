---
sidebar_position: 1
description: 設計しようぜ
---
# 設計するのやっぱ大切ですよ図をお供に設計しましょうよ
第19回大会、筆者の初陣ではDFD図、ユースケース図、画面遷移図の提出が必須になっており、ER図の提出が任意となっていました。また、要件定義書、テーブル定義書、労働時間管理設計書、シフト適正化設計書、セキュリティ設計書、アプリケーションの仕様書、操作の手順書など、とにかく文書化して提出せよという方針がとられていました。

また小規模大規模問わず、アプリケーションを設計するときに後から見返すことができ、なおかつ他人に他人に見せられるフォーマットになっている書類は自分の意見を言語化するよりも早く相手に情報を伝えることができます。

## 設計書ってそもそも何書けばいいのか
必要な機能のリストアップや使用するフレームワークやライブラリをとりあえず記載しておくことが必須です。

また、機能の洗い出しができた時点で必要なデータベースの構造を組むことができるのでER図を書くことができます。必須機能が洗い出せているのであれば、アルゴリズムや必要となるデータを注釈で書き込んでおくのも忘れずに。

### 設計書に書いておいてほしい情報
- 使ってるフレームワーク、言語、データベース
バージョンまで書いてあると環境の構築が楽になるのでメモ程度でもいいから必須
書き方が変わる言語・フレームワークもあるのでできるだけ詳細に書いておいてほしい

- 目的
設計書を読むときの解像度が段違いになる。

- ER図
これ読めばだいたいシステムのデータの流れとどういうプログラムを書こうとしてるかが何となくわかるので道を踏み外さないためにも書いておくと幸せになれる。

- クラス図
しっかりとしたものでなくていいからどれだけ細かくクラスを分けて管理しようとしていることさえ汲み取れればいいかなとか

- 実装する機能
これがないとコードの書きようがないので必須。ついでにどういうデータが必要になりそうかのメモ書きがあれば最高。利用しそうなアルゴリズムが書いてあれば最高。

- スケジュール
やっぱり工数計算はしないと結構厳しい。大規模だったら泣くしかない。大会とかに出すときはしっかり考えないと大変なんで並行して複数作業を進めることも視野に入れて「ここまでに終われば余裕が持てる」くらいの程度で見積もると吉。焦って結局想定より早く終わるだろうからそれでいいのだ。でも工数を見積もる時間あれば作業するよね…わかる…

## そういうわけだから設計をやってみよう

