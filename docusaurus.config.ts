import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'InterviewNotes',
  tagline: 'My notes for software engineering interviews',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://maindolaamit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/interview-notes/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maindolaamit', // Usually your GitHub org/user name.
  projectName: 'maindolaamit.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    '@docusaurus/theme-mermaid',
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Keep links to pages from before the October 2026 restructure working.
        redirects: [
          { from: '/docs/behavioural/challanging-project', to: '/docs/behavioural/challenging-project' },
          { from: '/docs/designs/interviews/url-shortner', to: '/docs/designs/interviews/url-shortener' },
          { from: '/docs/microservices/intro/deploymnt', to: '/docs/architecture/microservices/deployment' },
          // Microservices pages merged or replaced in the senior-level rewrite.
          ...[
            ['introduction', ''],
            ['decomposition-patterns', '/decomposition'],
            ['protocols', '/communication'],
            ['interview', '/interview-questions'],
          ].flatMap(([oldPage, newPage]) => [
            { from: `/docs/architecture/microservices/${oldPage}`, to: `/docs/architecture/microservices${newPage}` },
            { from: `/docs/microservices/intro/${oldPage}`, to: `/docs/architecture/microservices${newPage}` },
          ]),
        ],
        createRedirects(existingPath: string) {
          const movedSections: Record<string, string> = {
            '/docs/architecture/microservices': '/docs/microservices/intro',
            '/docs/architecture/patterns': '/docs/microservices/Patterns',
            '/docs/architecture/ddd': '/docs/microservices/ddd',
            '/docs/platform/cloud': '/docs/microservices/Cloud',
            '/docs/programming/tdd': '/docs/microservices/tdd',
          };
          for (const [newPath, oldPath] of Object.entries(movedSections)) {
            if (existingPath === newPath || existingPath.startsWith(`${newPath}/`)) {
              return existingPath.replace(newPath, oldPath);
            }
          }
          return undefined;
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themeConfig: {
    image: 'img/social-card.jpg',
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: 'rgba(15, 23, 42, 0.85)',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
    navbar: {
      title: 'InterviewNotes',
      logo: {
        alt: 'InterviewNotes logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Coding',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'langSidebar',
              label: 'Languages & Frameworks',
            },
            {
              type: 'docSidebar',
              sidebarId: 'programmingSidebar',
              label: 'Programming',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Design',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'architectureSidebar',
              label: 'Architecture',
            },
            {
              type: 'docSidebar',
              sidebarId: 'systemDesignSidebar',
              label: 'System Design',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'platformSidebar',
          position: 'left',
          label: 'Platform',
        },
        {
          type: 'docSidebar',
          sidebarId: 'genAiSidebar',
          position: 'left',
          label: 'GenAI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'behaviouralSidebar',
          position: 'left',
          label: 'Behavioural',
        },
        {
          href: 'https://github.com/maindolaamit?tab=repositories',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   // title: "Docs",
        //   items: [
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     // {
        //     //   label: "Stack Overflow",
        //     //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     // },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     // {
        //     //   label: "Twitter",
        //     //   href: "https://twitter.com/docusaurus",
        //     // },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     // {
        //     //   label: "Blog",
        //     //   to: "/blog",
        //     // },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InterviewNotes, Inc. Built with Docusaurus and Co-Pilot.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
