import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "InterviewNotes",
  tagline: "Interviews are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "maindolaamit", // Usually your GitHub org/user name.
  projectName: "interview-notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["@docusaurus/theme-mermaid", "plugin-image-zoom"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
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
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: ".markdown img",
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: "#BADA55",
        scrollOffset: 0,
        container: "#zoom-container",
        template: "#zoom-template",
      },
    },
    navbar: {
      title: "InterviewNotes",
      logo: {
        alt: "Site Logo",
        src: "img/home-logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "langSidebar",
          position: "left",
          label: "Programming",
        },
        {
          type: "docSidebar",
          sidebarId: "systemDesignSidebar",
          position: "left",
          label: "System Design",
        },
        {
          type: "docSidebar",
          sidebarId: "microServicesDesignSidebar",
          position: "left",
          label: "MicroServices",
        },
        {
          type: "docSidebar",
          sidebarId: "behaviouralSidebar",
          position: "left",
          label: "Behavioural",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/maindolaamit?tab=repositories",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
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
      additionalLanguages: ["java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
