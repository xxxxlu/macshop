const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist', // 设置构建输出目录为 dist
  publicPath: '/'
})
