const webpack = require("webpack")
const path = require('path')
const terserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    },
  },
  chainWebpack: config => {
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views/'))
      .set('@com', resolve('src/components/'))
      .set('@img', resolve('src/assets/img/'))
      .set('@api', resolve('src/api/'))
      .set('@class', resolve('src/class/'))


    if (process.env.use_analyzer) { // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    // config.devtool = 'source-map'
  },
  configureWebpack: config => {
    !!!config.plugins && (config.plugins = [])
    // 只使用用到的语言库（其实没有使用moment,所以该代码意思是忽略moment依赖）
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

    if (process.env.NODE_ENV === 'production') {
      // 去除console.log
      config.optimization.minimizer.push(new terserPlugin({
        sourceMap: false,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }))
    }

    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭host check，方便使用ngrok之类的内网转发工具
       */
      config.devServer = {
        // proxy: 'http://backend.ssx.com'
      }
    }
  }
}
