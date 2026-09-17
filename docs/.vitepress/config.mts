import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '果果的行测数量关系学习库',
  description: '行测数量关系知识、疑惑、错题与考场策略的个人学习库',
  lang: 'zh-CN',
  base: '/xingce-shuliang/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#f59e0b' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }]
  ],

  themeConfig: {
    logo: '🍊',
    siteTitle: '果果 · 数量关系',

    nav: [
      { text: '首页', link: '/' },
      { text: '我的疑惑', link: '/疑惑/' },
      { text: '错题档案', link: '/错题/' },
      { text: '知识体系', link: '/知识体系/' }
    ],

    sidebar: {
      '/知识体系/': [
        {
          text: '行程问题',
          collapsed: false,
          items: [
            { text: '速度时间大小规律', link: '/知识体系/行程问题/速度时间大小规律' }
          ]
        },
        {
          text: '工程问题',
          collapsed: true,
          items: [{ text: '待整理', link: '/知识体系/工程问题/' }]
        },
        {
          text: '经济问题',
          collapsed: true,
          items: [{ text: '待整理', link: '/知识体系/经济问题/' }]
        },
        {
          text: '排列组合',
          collapsed: true,
          items: [{ text: '待整理', link: '/知识体系/排列组合/' }]
        },
        {
          text: '容斥问题',
          collapsed: true,
          items: [{ text: '待整理', link: '/知识体系/容斥问题/' }]
        }
      ],
      '/疑惑/': [
        { text: '我的疑惑总表', link: '/疑惑/' }
      ],
      '/错题/': [
        { text: '错题档案', link: '/错题/' }
      ]
    },

    outline: { level: [2, 3] },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/stubborn0512/xingce-shuliang' }
    ],
    editLink: {
      pattern: 'https://github.com/stubborn0512/xingce-shuliang/edit/main/docs/:path'
    },
    footer: {
      message: '把不会的弄懂，把会的练成条件反射。',
      copyright: '果果的行测数量关系学习库'
    }
  }
})
