module.exports = {
  webpack: config => {
    config.output.library = 'reactApp'
    config.output.libraryTarget = 'umd'
    // 访问资源路径
    config.output.publicPath = 'http://localhost:6600/'
    return config
  },
  devServer: configFunction => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      }
      return config
    }
  },
}
