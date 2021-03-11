const packageName = require('./package').name

module.exports = {
  publicPath: '/vue-app',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
}
