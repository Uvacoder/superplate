/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'superplate',
  tagline: 'The frontend boilerplate with superpowers',
  url: 'https://superplate-two.vercel.app',
  baseUrl: '/',
  projectName: 'superplate',
  organizationName: 'Bells Vista',
  favicon: 'img/superplate-logo.svg',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/uvacoder/superplate/tree/master/documentation',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/footer_icon.png',
    navbar: {
      title: 'superplate',
      logo: {
        alt: 'SuperPlate Logo',
        src: 'img/superplate-logo.svg',
      },
      items: [
        { to: 'docs', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/uvacoder/superplate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
            {
              label: 'Development',
              to: 'docs/development/how-it-works',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/VaLandscapes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: "https://github.com/uvacoder/superplate",
            },
            {
              html: `
                  <a href="https://github.com/uvacoder/superplate" target="_blank" rel="noreferrer noopener" aria-label="Star this project on GitHub">
                    <img src="https://img.shields.io/github/stars/uvacoder/superplate?logo=reverbnation&logoColor=white" alt="github-stars" />
                  </a>
                `,
            },
          ],
        },
      ],
      logo: {
        alt: 'Pankod Logo',
        src: 'img/pankod_footer_logo.png',
        href: 'https://github.com/uvacoder'
      },
      copyright: `Copyright ?? ${new Date().getFullYear()} BellsVista, Inc.`,
    },
  },
};

module.exports = siteConfig;
