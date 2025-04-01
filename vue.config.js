const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../electropak',
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false
})
