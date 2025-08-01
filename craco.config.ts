import { resolve } from 'path'
module.exports = {
  // yarn add -D babel-plugin-import 包先安装
  babel: {
    // antd包在craco增量配置中的按需加载配置
    // plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
  },
  // 添加路径别名
  webpack: {
    alias: {
      // 在组件中就可以用@来表示，当前项目到src目录
      '@': resolve('./src')
    }
  },
  devServer: {
    // 浏览器自动打开关闭
    open: false,
    port: 3001,
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin:true,
      //   pathRewrite: { '^/api': '' }
      // }
    },
  }
}