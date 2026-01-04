import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Viewport',
  description: 'A lightweight, high-performance Vue 3 directive and composable to detect when elements enter the viewport.',

  head: [['link', { rel: 'icon', href: '/logo.svg' }]],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Core Lib', link: 'https://vue-viewport.vikeria.it' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vikeriait/nuxt-viewport' },
    ],
  },

  sitemap: {
    hostname: 'https://vue-viewport.vikeria.it',
  },

  lastUpdated: true,
})
