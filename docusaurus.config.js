// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mantil Docs',
  tagline: 'Mantil is cool!',
  url: 'https://mantil-io.github.io',
  baseUrl: '/MantilDocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mantil-io', // Usually your GitHub org/user name.
  projectName: 'MantilDocs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MantilDocs',
        logo: {
          alt: 'Mantil Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /**{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://www.mantil.com/',
            label: 'Home',
            position: 'left',
          },
          {
            href: 'https://blog.mantil.com/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/mantil-io/mantil',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /**{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'intro',
              },
            ],
          },*/
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/mantilcommunity/shared_invite/zt-z3iy0lsn-7zD_6nqEucsgygTvHmnxAw',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MantilDev',
              },
            ],
          },
          /**{
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mantil, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
