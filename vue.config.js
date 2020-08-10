const proxyObj = {}
proxyObj['/api'] = {
  ws: false,
  target: 'http://localhost:7001',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}


module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        store: "@/store"
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:7001/api', // 代理到的后端服务器地址
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
}

};
