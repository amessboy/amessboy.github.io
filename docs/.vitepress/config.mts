import { defineConfig } from 'vitepress'
import { getSidebarData, getNavData } from './navSidebarUtil'
import updateInfo from './watchJson.json'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import { description, github, keywords, name, base } from './meta'
import socialLinks from './link'

// 根据环境变量确定域名
const baseUrl = process.env.CUSTOM_DOMAIN === 'true' ? 'https://doc.v2plus.xyz' : 'https://amessboy.github.io'

console.log('【updateInfo】', updateInfo)
console.log('【baseUrl】', baseUrl)

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'V2Plus文档',
  titleTemplate: ':title - V2Plus科学上网',
  description:
    'V2Plus提供专业的科学上网服务，支持V2Ray、Xray、Trojan、VLESS、VMESS等协议，稳定的翻墙梯子，小火箭配置，机场推荐，零配置秒连接全球网络',

  sitemap: {
    hostname: baseUrl,
  },

  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'V2Plus,科学上网,翻墙,梯子,机场,小火箭,魔法上网,V2Ray,Xray,Trojan,VLESS,VMESS,Shadowsocks,VPN,代理服务器,网络加速,突破封锁,海外访问,YouTube,Google,Twitter,Facebook,Instagram,TikTok,Netflix,Disney+',
      },
    ],
    ['meta', { name: 'author', content: 'V2Plus Team' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'V2Plus科学上网' }],
    ['meta', { property: 'og:title', content: 'V2Plus - 专业稳定的科学上网梯子服务' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'V2Plus提供专业的科学上网服务，支持V2Ray、Xray、Trojan等多种协议，稳定的翻墙梯子，小火箭配置教程，零配置秒连接全球网络，访问YouTube、Google、Twitter等海外网站',
      },
    ],
    ['meta', { property: 'og:url', content: baseUrl }],
    ['meta', { property: 'og:image', content: `${baseUrl}/og-image.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@V2Plus' }],
    ['meta', { name: 'twitter:title', content: 'V2Plus - 专业稳定的科学上网梯子服务' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'V2Plus提供专业的科学上网服务，支持V2Ray、Xray、Trojan等协议，稳定翻墙梯子，小火箭配置',
      },
    ],
    ['meta', { name: 'twitter:image', content: `${baseUrl}/og-image.png` }],
    ['link', { rel: 'canonical', href: baseUrl }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],

    // 结构化数据
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'V2Plus科学上网',
        description: '专业的科学上网服务提供商，支持V2Ray、Xray、Trojan等协议',
        url: baseUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    ],

    // Google Analytics
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-W1S9VT3FJN',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W1S9VT3FJN');
      `,
    ],
  ],

  themeConfig: {
    // 修复logo路径
    logo: '/logo.png',
    // 文章右侧大纲目录
    outlineTitle: '导航栏',
    outline: 'deep',
    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 主题
    darkModeSwitchLabel: '深浅模式',
    // 返回顶部label
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
    sidebarMenuLabel: '归档',
    // 搜索
    search: {
      provider: 'local',
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present China Carlos',
    },
    nav: getNavData(),
    sidebar: getSidebarData(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/amessboy' }],

    // 添加编辑链接
    editLink: {
      pattern: 'https://github.com/amessboy/amessboy.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
})
