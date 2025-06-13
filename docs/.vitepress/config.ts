import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "大前端知识库",
  // titleTemplate: '大前端知识库 - :title',
  description: "整理和打造一个大前端个人知识库，以js、css、html为基础，涵盖了React、Vue、uniapp等前端主流框架，以及flutter跨平台开发，同时，也会包括一些Java Springboot等后端相关开发知识。",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '前端知识库, 大前端, 前端开发, JavaScript, CSS, HTML, React, Vue, uniapp, Flutter, Springboot' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moohng/my-notes' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
          },
          modal: {
            displayDetails: '显示详细信息',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '返回搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '上次更新',
    },
    outline: {
      label: '页内导航',
    },
  },
  cleanUrls: true,
  lastUpdated: true,
})
