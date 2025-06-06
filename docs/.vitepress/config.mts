import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  // base: "/blog/",
  base: "/",
  title: "Blog - Lotus Media",
  description: "Blog da empresa Lotus Media",
  head: [['link', { rel: 'icon', href: './images/logo.svg' }]],
  themeConfig: {
    siteTitle: "Blog",
    // :title is replaced with the page title
    titleTemplate: ":title - ...",

    logo: "/images/logo.svg",

    // The title for establishing the outline of the page
    outlineTitle: 'Nesta página',

    nav: [
      { text: 'Cultura Tech', link: '/posts/culture/' },
      { text: 'Dicas', link: '/posts/tips/' },
      { text: 'Tutoriais', link: '/posts/tutorials/' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Cultura Tech', link: '/posts/culture/' },
          { text: 'Dicas', link: '/posts/tips/' },
          { text: 'Segurança', link: '/posts/security/' },
          { text: 'Tutoriais', link: '/posts/tutorials/' },
        ]
      },
      {
        text: 'Desenvolvimento',
        items: [
          { text: 'GitHub', link: 'https://github.com/lotus-media' },
          { text: 'Repositório', link: 'https://github.com/lotus-media/blog' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lotus-media/blog' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: `Copyright &copy; ${new Date().getFullYear()}`
    },

    // Enable the edit link
    // :path is replaced with the relative file path
    editLink: {
      pattern: 'https://github.com/lotus-media/blog/edit/main/docs/:path'
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

