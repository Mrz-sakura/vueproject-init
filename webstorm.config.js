'use strict'
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@com': path.resolve(__dirname, 'src/components'),
      '@class': path.resolve(__dirname, 'src/class'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@img': path.resolve(__dirname, 'src/assets/img')
    }
  }
}
