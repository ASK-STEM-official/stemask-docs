import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'STEMASK Docs',
  tagline: 'Docuements for STEM members',
  favicon: 'img/stem.ico',

  // サイトのURL
  url: 'https://ask-stem-official.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // GitHub pages環境の場合'/<リポジトリ名>/' を入力
  baseUrl: '/stemask-docs/',

  // GitHub Pagesのデプロイ構成
  // GitHub Pagesを使用していない場合は不要
  organizationName: 'ASK-STEM-official', // ユーザーネーム
  projectName: 'stemask-docs', // リポジトリ名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  noIndex: true,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: { // https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [//ここのかっこで括られている部分をコピペして設定
      '@docusaurus/plugin-content-docs',
      {
        id: 'unity-docs',
        path: 'unity-docs',
        routeBasePath: 'unity-docs',
        sidebarPath: './sidebars.ts',//サイドバーパス
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'IT-docs',
        path: 'IT-docs',
        routeBasePath: 'IT-docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'web-docs',
        path: 'web-docs',
        routeBasePath: 'web-docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'beginners',
        path: 'beginners',
        routeBasePath: 'beginners',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'git',
        path: 'git',
        routeBasePath: 'git',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ET-docs',
        path: 'ET-docs',
        routeBasePath: 'ET-docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'LEGO-docs',
        path: 'LEGO-docs',
        routeBasePath: 'LEGO-docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',//編集用メニューの遷移先URL
        // ... other options
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/stemask-docs-social-card.jpg',
    colorMode: {
      defaultMode: 'dark'//デフォルトのカラーテーマ
    },
    navbar: {
      title: 'STEMASK Docs',
      logo: {
        alt: 'Logo',
        src: 'img/stem.svg',
      },
      items: [
        {
          to: "/docs/intro",
          position: 'left',
          label: 'How to Edit',
        },
        {
          to: "/beginners/intro",
          position: 'left',
          label: 'Beginners',
        },
        {
          to: "/unity-docs/intro",
          position: 'left',
          label: 'Unity',
        },
        {
          to: "/IT-docs/intro",
          position: 'left',
          label: 'IT',
        },
        {
          to: "/web-docs/intro",
          position: 'left',
          label: 'Web',
        },
        {
          to: "/ET-docs/intro",
          position: 'left',
          label: 'ETロボコン',
        },
        {
          to: "/LEGO-docs/intro",
          position: 'left',
          label: 'LEGOロボット',
        },
        {
          to: "/git/intro",
          position: 'left',
          label: 'Git使い方',
        },
        {
          to: "/blog",
          position: 'left',
          label: 'blog',
        },

        // {to: '/blog', label: '作品集', position: 'left'},
        {
          href: 'https://github.com/ASK-STEM-official/stemask-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {//この中かっこをコピペでカテゴリトップを作成
          title: 'How to Edit',
          items: [
            {
              label: '公式チュートリアル',
              to: '/docs/intro',//内部リンクである場合はto:を使う
            },
          ]
        },
        {
          title: 'Unity Docs',
          items: [//カテゴリ内のコンテンツの表示はこの部分を参考
            {
              label: 'はじめに',
              to: '/unity-docs/intro',//内部リンクである場合はto:を使う
            },
            {
              label: '環境構築',
              to: '/unity-docs/category/環境構築',
            },
            {
              label: 'よくあるつまずき',
              to: '/unity-docs/category/よくあるつまずき',
            },
            {
              label: 'デモプロジェクトの作成',
              to: '/unity-docs/category/デモプロジェクトの作成',
            },
          ],
        },
        {
          title: 'IT Docs',
          items: [//カテゴリ内のコンテンツの表示はこの部分を参考
            {
              label: 'はじめに',
              to: '/IT-docs/intro',//内部リンクである場合はto:を使う
            },
          ],
        },
        {
          title: 'Web docs',
          items: [
            {
              label: 'はじめに',
              to: '/web-docs/intro',
            },
          ]
        },
        {
          title: 'ETロボコン docs',
          items: [
            {
              label: 'はじめに',
              to: '/ET-docs/intro',
            },
          ]
        },
        {
          title: 'LEGOロボット docs',
          items: [
            {
              label: 'はじめに',
              to: '/LEGO-docs/intro',
            },
          ]
        },
        {
          title: 'Gitの使い方',
          items: [
            {
              label: 'はじめに',
              to: '/git/intro',
            },
          ]
        },
        {
          title: '関連リンク',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ASK-STEM-official/stemask-docs',//外部リンクはhref要素で宣言
            },
            {
              label: 'ブログ',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} STEMASK Research Club.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default
{
  themeConfig: {
    prism: {
      additionalLanguages: ['charp'],
    },
  },
};
