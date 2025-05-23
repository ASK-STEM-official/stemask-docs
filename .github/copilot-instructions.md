# GitHub Copilot Instructions

## Project Overview
このリポジトリは、Docusaurusを使用して構築されたドキュメントサイトです。このドキュメントでは、プロジェクトのセットアップ、開発、デプロイメントに関する手順を説明します。

## Coding Conventions
- 使用言語: TypeScript, markdown
- フレームワーク: React18.0によって記述されたDocusaurus3.0.0
- buildツール: Node.js v20.11.0
- GitHubActionsでビルドしてGitHubPagesにデプロイ

## Copilot Behaviors
Copilot は以下の方針に従って補完してください：

### docusaurus.config.jsの補完
#### 新しくカテゴリを作成した場合、``docusaurus.config.js``にカテゴリを追加してください。
- pluginsの配列に以下の形式でカテゴリの登録を行います
    ```JavaScript
        [
            '@docusaurus/plugin-content-docs',
            {
                id: '新規作成したフォルダ名',
                path: '新規作成したフォルダ名',
                routeBasePath: '新規作成したフォルダ名',
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/ootomonaiso/ootomonaiso_strage',
            },
        ],
    ``` 
    
- themeConfigのitems配下に以下の形式でカテゴリの登録を行います
    ```JavaScript
        {
            to: '/新規作成したフォルダ名/intro',
            position: 'left',
            label: 'ここはユーザー決める',
        },
    ```

- footerのlinks配下に以下の形式でカテゴリの登録を行います
    ```JavaScript
        {
            label: '業務用ITソフトウェア',
            to: '/IT_gyoumu/intro',
        },
    ```

