import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '果果的行测复盘库',
  description: '行测五大模块的知识体系、疑惑、错题与复盘',
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
    siteTitle: '果果 · 行测复盘库',

    nav: [
      { text: '首页', link: '/' },
      { text: '言语', link: '/知识体系/言语理解/' },
      { text: '判断', link: '/知识体系/判断推理/' },
      { text: '数量', link: '/知识体系/数量关系/' },
      { text: '资料', link: '/知识体系/资料分析/' },
      { text: '常识', link: '/知识体系/常识判断/' },
      { text: '疑惑', link: '/疑惑/' },
      { text: '错题', link: '/错题/' },
      { text: '复盘', link: '/复盘/' }
    ],

    sidebar: {
      '/知识体系/言语理解/': [
        { text: '言语理解母体系', items: [{ text: '方法精讲思维导图整理', link: '/知识体系/言语理解/' }] }
      ],
      '/知识体系/判断推理/': [
        { text: '判断推理', items: [{ text: '模块入口', link: '/知识体系/判断推理/' }] }
      ],
      '/知识体系/数量关系/': [
        {
          text: '行程问题',
          collapsed: false,
          items: [
            { text: '速度时间大小规律', link: '/知识体系/行程问题/速度时间大小规律' }
          ]
        },
        { text: '工程问题', collapsed: true, items: [{ text: '待整理', link: '/知识体系/工程问题/' }] },
        { text: '经济问题', collapsed: true, items: [{ text: '待整理', link: '/知识体系/经济问题/' }] },
        { text: '排列组合', collapsed: true, items: [{ text: '待整理', link: '/知识体系/排列组合/' }] },
        { text: '容斥问题', collapsed: true, items: [{ text: '待整理', link: '/知识体系/容斥问题/' }] }
      ],
      '/知识体系/资料分析/': [
        { text: '资料分析母体系', collapsed: false, items: [
          { text: '体系总览', link: '/知识体系/资料分析/' },
          { text: '体系说明', link: '/知识体系/资料分析/00-体系说明' }
        ] }
      ],
      '/知识体系/常识判断/': [
        { text: '常识判断', items: [{ text: '模块入口', link: '/知识体系/常识判断/' }] }
      ],
      '/疑惑/': [{ text: '我的疑惑总表', link: '/疑惑/' }],
      '/错题/': [{ text: '错题档案', link: '/错题/' }],
      '/复盘/': [{ text: '复盘中心', link: '/复盘/' }]
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
      copyright: '果果的行测复盘库'
    }
  }
})
