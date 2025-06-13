import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: '大前端知识库',
  // titleTemplate: '大前端知识库 - :title',
  description:
    '整理和打造一个大前端个人知识库，以js、css、html为基础，涵盖了React、Vue、uniapp等前端主流框架，以及flutter跨平台开发，同时，也会包括一些Java Springboot等后端相关开发知识。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端知识库, 大前端, 前端开发, JavaScript, CSS, HTML, React, Vue, uniapp, Flutter, Springboot',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes', activeMatch: '/notes/' },
      { text: '文章', link: '/articles', activeMatch: '/articles/' },
      { text: '作品', link: '/projects', activeMatch: '/projects/' },
    ],
    sidebar: {
      '/notes/': sidebarNotes(),
      '/articles/': sidebarArticles(),
      '/projects/': sidebarProjects(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/moohng/my-notes' }],
    editLink: {
      pattern: 'https://github.com/moohng/my-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
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
      text: '最后更新于',
    },
    outline: {
      label: '页内导航',
      level: 'deep',
    },
    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
  cleanUrls: true,
  lastUpdated: true,
});

function sidebarNotes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      base: '/notes/guide/',
      items: [{ text: '为什么要写这个知识库？', link: 'why' }],
    },
    {
      text: '大前端',
      base: '/notes/frontend/',
      items: [
        { text: '跨域问题', link: 'cross-domain' },
        { text: 'uniapp', link: '/uniapp' },
        { text: 'Flutter', link: '/flutter' },
      ],
    },
    {
      text: '服务端',
      base: '/notes/backend/',
      items: [
        { text: 'Java Springboot', link: '/springboot' },
        { text: 'MySQL', link: '/mysql' },
      ],
    },
    {
      text: '其他',
      base: '/notes/other/',
      items: [
        { text: 'Git', link: '/git' },
        { text: 'Markdown', link: '/markdown' },
        { text: 'Linux', link: '/linux' },
        { text: '未分类', link: '/uncategorized' },
      ],
    },
  ];
}

function sidebarArticles(): DefaultTheme.SidebarItem[] {
  return [];
}

function sidebarProjects(): DefaultTheme.SidebarItem[] {
  return [];
}