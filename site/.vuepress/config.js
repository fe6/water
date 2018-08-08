const base = process.env.GH ? '/water/' : '/'

module.exports = {
  title: '水滴',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Water',
      description: 'An enterprise-level UI design language and Vue.js implementation'
    },
    '/cn/': {
      lang: 'zh-CN',
      title: '水滴',
      description: '一套企业级的 UI 设计语言和 Vue.js 实现'
    }
  },
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'fe6/water',
    searchMaxSuggestions: 5,
    docsDir: 'site',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          '/',
          '/affix',
          '/breadcrumb',
          '/button',
          '/grid',
          '/icon',
          '/loadbar',
          '/radio',
          '/rate',
          '/switch',
        ]
      },
      '/cn/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        sidebar: [
          '/cn/',
          '/cn/affix',
          '/cn/breadcrumb',
          '/cn/button',
          '/cn/grid',
          '/cn/icon',
          '/cn/loadbar',
          '/cn/radio',
          '/cn/rate',
          '/cn/switch',
        ]
      },
    },
  }
}
