import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Software Merge Guidelines',
  tagline: 'Documentação e guia de apoio ao merge',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://stefanirees.github.io',
  baseUrl: '/mergetrace/',
  organizationName: 'StefaniRees',
  projectName: 'mergetrace',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Página Inicial',
      items: [
        {
          to: '/docs/welcome',
          label: 'Welcome',
          position: 'left',
        },
        {
          to: '/docs/ia',
          label: 'Comunidade de Especialistas',
          position: 'left',
        },
        {
          href: 'https://github.com/StefaniRees/mergetrace',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guideline',
          items: [
            { label: 'Welcome', to: '/docs/welcome' },
            { label: 'Fases', to: '/docs/phases' },
            { label: 'Papéis', to: '/docs/roles' },
            { label: 'Atividades', to: '/docs/activities' },
          ],
        },
        {
          title: 'Referências',
          items: [
            { label: 'Artefatos', to: '/docs/artifacts' },
            { label: 'Guidelines', to: '/docs/guidelines' },
            { label: 'Templates', to: '/docs/templates' },
            { label: 'Ferramentas', to: '/docs/tools' },
          ],
        },
        {
          title: 'Pesquisa',
          items: [
            { label: 'Comunidade de Especialistas', to: '/docs/ia' },
            { label: 'Repositório GitHub', href: 'https://github.com/StefaniRees/mergetrace' },
            { label: 'UNISINOS — PPG Computação Aplicada', href: 'https://www.unisinos.br' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MergeTrace · Stéfani Celestino Rees · UNISINOS · PPG Computação Aplicada`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;