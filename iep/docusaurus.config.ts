import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'India Education Project',
  tagline: 'Bharat Bhagya Bidhata',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://indiaeducationproject.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'indiaeducationproject', // Usually your GitHub org/user name.
  projectName: 'indiaeducationproject.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',//use 'throw' instead to stop 'npm run build' on broken links
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
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'tutorial',
          // id: 'product', // omitted => default instance
          path: 'docs',
          routeBasePath: 'tutorial',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/indiaeducationproject/indiaeducationproject.github.io/tree/main/dbs/',
          //editUrl: 'https://github.com/designbuildsell/website...'
          // ... other options
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/indiaeducationproject/indiaeducationproject.github.io/tree/main/dbs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    /*
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'build-doc',
        routeBasePath: 'build',
        sidebarPath: './sidebarsBuild.ts',
        editUrl: 'https://github.com/designbuildsell/designbuildsell.github.io/tree/main/dbs/',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sell',
        path: 'sell-doc',
        routeBasePath: 'sell',
        sidebarPath: './sidebarsSell.ts',
        editUrl: 'https://github.com/designbuildsell/designbuildsell.github.io/tree/main/dbs/',
        // ... other options
      },
    ] */
  ],
  /*
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          //To change docs folder to tutorial and /docs path to /tutorial
          //customDocsPath: 'tutorial',
          //routeBasePath: 'tutorial',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
      } satisfies Preset.Options,
    ],
  ],
*/
  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',
    //Some meta tags for SEO
    metadata: [
      {name: 'keywords', content: 'india, education, blog, tutorial, architecture, engineering, science, arts, philosophy'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    //Algolia Doc Search
    algolia: {
      // The application ID provided by Algolia
      appId: 'YRYW7U73G8',

      // Public API key: it is safe to commit it
      apiKey: '0e259f6c132392995d1b98e6fd7968a8',

      //Temporary name. Can be refined when the content gets more structured.
      indexName: 'Master',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
      //  to: '/',
      //},

      // Optional: Algolia search parameters
      //searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    // Color theme
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      // match user's system theme
      respectPrefersColorScheme: true,
    },


    //Navbar elements
    navbar: {
      title: '',
      logo: {
        alt: 'India Education Project Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        {to: '/why', label: 'Why', position: 'left'},
        {to: '/how', label: 'How', position: 'left'},
        {to: '/what', label: 'What', position: 'left'},

        {to: '/donate', label: 'Donate', position: 'right', className: 'navbar-donate'},
        {to: '/blog', label: 'Blog', position: 'right'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    docs: {
      sidebar: {
        //makes sidebar hideable
        hideable: true,
        //other catergories auto collapse while expanding
        autoCollapseCategories: true,
      }
    },
    footer: {
      style: 'dark',
      /*logo: {
        alt: 'Design Build Sell Logo',
        src: 'img/footer.png',
        //href: 'https://opensource.fb.com',
        width: 32,
        height: 32,
      }*/
      links: [
        {
          title: 'Quick Access',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Tutorials',
              to: '/',
            },
            {
              label: 'Resources',
              to: '/',
            },
            {
              label: 'Books',
              to: '/',
            },
            {
              label: 'Tools',
              to: '/',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/6XMjW9ztbw',
            },
            {
              label: 'Twitch',
              to: 'https://twitch.com/',
            },
            {
              label: 'Substack',
              to: 'https://indiaeducationproject.substack.com',
            },
            
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/IEPtweets',
            },
            {
              label: 'YouTube',
              //using href instead of to will result in an icon
              to: 'https://www.youtube.com/@indiaeducationproject',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/indiaeducationproject',
            },

            {
              label: 'GitHub',
              to: 'https://github.com/indiaeducationproject',
            },
            
          ], 
        },
      ],
      copyright: `© Copyright 2018 - ${new Date().getFullYear()} India Education Project. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

