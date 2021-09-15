module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gregs-vue-list/'
    : '/',
  outputDir: './dist',
  productionSourceMap: false
}
