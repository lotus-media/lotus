import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  base: "/url-base/",
  title: "Blog - Lotus Media",
  description: "Blog da empresa Lotus Media",
  // head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    siteTitle: "",
    // :title is replaced with the page title
    titleTemplate: ":title - ...",

    // logo: "favicon.ico",

    // The title for establishing the outline of the page
    // outlineTitle: 'Nesta página',

    nav: [
      // { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          // { text: 'About', link: '/about' },
          // { text: 'Contact', link: '/contact' },
          // { text: 'Home', link: '/home' },
        ]
      },
      {
        text: 'Desenvolvimento',
        items: [
          { text: 'Dev. no GitHub', link: 'https://github.com/lotus-media' },
          { text: 'Repositório', link: 'https://github.com/lotus-media/blog' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lotus-media/blog' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 20XX'
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
  }
})

