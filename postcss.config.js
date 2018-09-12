module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-flexbugs-fixes': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    },
    'postcss-reporter': {
      clearReportedMessages: true,
    },
    'cssnano': { discardUnused: { fontFace: false }, zindex: false },
    'autoprefixer': {
      browsers: ['>1%', 'last 2 versions'],
      flexbox: 'no-2009',
    }
  }
}
