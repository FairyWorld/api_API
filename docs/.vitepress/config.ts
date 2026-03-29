import { defineConfig } from 'vitepress'

// Use a relative base so the site can be deployed under any path (e.g. GitHub Pages project or other hosts)
const base = '/'

const sidebarItems = [
  { text: 'GY.公益中国:cn:', link: '/guide/公益中国' },
  { text: '0. 壁纸模块', link: '/guide/壁纸模块' },
  { text: '1. 新闻模块', link: '/guide/新闻模块' },
  { text: '2. 视频模块', link: '/guide/视频模块' },
  { text: '3. 笑话段子轻松一刻', link: '/guide/笑话段子轻松一刻' },
  { text: '4. 图片相册接口', link: '/guide/图片相册接口' },
  { text: '5. 天气预报', link: '/guide/天气预报' },
  { text: '6. Web 前端开发资讯日报', link: '/guide/前端开发资讯日报' },
  { text: '7. Web 知乎日报数据', link: '/guide/知乎日报数据' },
  { text: '8. 豆瓣热播电影', link: '/guide/豆瓣热播电影' },
  { text: '9. 招聘信息', link: '/guide/招聘信息' },
  { text: '10. 开发杂类', link: '/guide/开发杂类' },
  { text: '11. 电子商务', link: '/guide/电子商务' },
  { text: '12. 人工智能', link: '/guide/人工智能' },
  { text: '13. 生活服务', link: '/guide/生活服务' },
  { text: '14. 实名鉴权', link: '/guide/实名鉴权' },
  { text: '15. 网络信息', link: '/guide/网络信息' },
  { text: '16. 新闻资讯', link: '/guide/新闻资讯' },
  { text: '17. 知识问答', link: '/guide/知识问答' }
]

export default defineConfig({
  lang: 'zh-CN',
  title: '姬长信 API For Docker',
  description: '开放 API 平台，免费、不限调用，覆盖生活常用、出行服务、开发工具、金融服务和公益数据等场景。',
  // Use the repository subpath so assets load correctly on GitHub Pages project site
  base,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}vitepress-logo-mini.svg` }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }]
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    nav: [
      { text: '首页', link: '/' },
      { text: '接口文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/insoxin/API' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '接口文档',
          items: sidebarItems
        }
      ]
    },
    outlineTitle: '本页目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/insoxin/API' }
    ]
  }
})
