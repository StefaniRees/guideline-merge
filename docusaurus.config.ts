import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MergeTrace',
  tagline: 'Software Merge Guidelines',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://stefanirees.github.io',
  baseUrl: '/guideline-merge/',
  organizationName: 'StefaniRees',
  projectName: 'mergetrace',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // ─── i18n: PT-BR como padrão, EN como alternativa ───────────────────────
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {
        label: '🇧🇷 Português',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
      en: {
        label: '🇺🇸 English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
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
      title: 'MergeTrace',
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
        // ─── Botão de troca de idioma ──────────────────────────────────────
        {
          type: 'localeDropdown',
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