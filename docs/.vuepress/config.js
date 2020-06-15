module.exports = {
  title: 'MaYunHai',
  description: '分享web前端相关的一些个人见解',
  base: '/mayunhai/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: 'VScode',
        link: '/VScode/'
      },
      {
        text: 'Util',
        link: '/util/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ],
    sidebar: {
      "/blog/": ["", "HTML", "CSS", "Javascript"],
      "/util/": [""]
    },
    lastUpdated: '上次更新',
    repo: '/mayunhai/mayunhai',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 1
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'));
    }
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    ['@vuepress/nprogress']
  ]
}
