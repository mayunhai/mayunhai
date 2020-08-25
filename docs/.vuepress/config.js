module.exports = {
  title: 'MaYunHai',
  description: '分享web前端相关的一些个人见解',
  base: '/mayunhai/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#0388e3'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: 'icons/home.png'
    }],
    ['link', {
      rel: 'mask-icon',
      href: 'icons/home.png',
      color: '#0388e3'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: 'icons/home.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top', true],
    ['@vuepress/nprogress'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '新内容可用',
        buttonText: '更新'
      }
    }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: '/home.png',
    nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: '网站',
      link: '/website/'
    },
    {
      text: '正则',
      link: '/Regular/'
    },
    {
      text: 'VScode',
      link: '/VScode/'
    },
    {
      text: 'Array',
      link: '/array/'
    },
    {
      text: 'Util',
      link: '/util/'
    },
    {
      text: '算法',
      link: '/sort/'
    },
    {
      text: 'Blog',
      link: '/blog/'
    }
    ],
    sidebar: {
      '/blog/': ['', 'HTML', 'CSS', 'Javascript'],
      '/array/': ['', 'Ergodic', 'DealWith', 'Judge', 'Conversion'],
      '/Regular/': [''],
      '/util/': [''],
      '/sort/': ['', 'Two', 'One', 'Other']
    },
    lastUpdated: '上次更新',
    repo: '/mayunhai/mayunhai',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 1
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
