// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WildDrone',
  tagline: 'Training Resources',
  favicon: 'img/cropped-WildDrone_512x512-transparent-32x32.png',

  // Set the production url of your site here
  url: 'https://wilddrone.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/training/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WildDrone', // Usually your GitHub org/user name.
  projectName: 'training', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WildDrone',
        logo: {
          alt: 'WildDrone logo',
          //src: 'img/logo.svg',
          src: 'img/WildDrone_Simple_logo_Colour.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'trainingSidebar',
            position: 'left',
            label: 'WildDrone Training',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/WildDrone',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Training index',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wilddrone_eu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'WildDrone.eu',
                href: 'https://wilddrone.eu',
              },
              {
                label: 'WildDrone News',
                to: 'https://wilddrone.eu/news-and-events/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WildDrone. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
