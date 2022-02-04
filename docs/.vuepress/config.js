module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Component Library',
      description: 'Documentation site for the Vue component library plugin'
    }
  },

  themeConfig: {
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/input-text.md',
        ]
      }
    ]
  }
}
