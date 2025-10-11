import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  base: "/",
  title: "Lotus - Lotus Media",
  description: "SDKs, kits de arquivos e instaladores para a equipe da Lotus Media",
  head: [['link', { rel: 'icon', href: './images/favicon.svg' }]],
  themeConfig: {
    siteTitle: "Lotus",
    // :title is replaced with the page title
    titleTemplate: ":title - ...",

    logo: "/images/favicon.svg",

    // The title for establishing the outline of the page
    outlineTitle: 'Nesta página',

    nav: [
      { text: 'Site', link: 'https://lts.app.br' },
      { text: 'Blog', link: 'https://blog.lts.app.br' },
      { text: 'SDKs e IDEs', link: '/development-kits' },
      { text: 'Suporte', link: '/support-kits' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'SDK Python', link: '' },
          { text: 'SDK PHP', link: '' },
          { text: 'SDK Node', link: '' },
          { text: 'SDK NextJS', link: '' },
          { text: 'SDK Vitepress', link: '' },
          { text: 'Kit de Manutenção', link: '' },
          { text: 'Kit de Instalação', link: '' },
          { text: 'Kit de ISOs', link: '' },
        ]
      },
      {
        text: 'Desenvolvimento',
        items: [
          { text: 'GitHub', link: 'https://github.com/lotus-media' },
          { text: 'Repositório', link: 'https://github.com/lotus-media/lotus' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lotus-media/lotus' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a><br>Confira o <a href="https://lts.app.br/" target="_blank" rel="noreferrer noopener">nosso site</a>',
      copyright: `Copyright &copy; ${new Date().getFullYear()}`
    },

    // Enable the edit link
    // :path is replaced with the relative file path
    editLink: {
      pattern: 'https://github.com/lotus-media/lotus/edit/main/docs/:path'
    },

    // Config for the last updated text
    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local'
    },
  },
  markdown: {
    lazyLoading: true,
  }
})

