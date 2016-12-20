var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //单独解析并打包css样式


module.exports = {
   /*入口文件地址*/
  entry: './src/main.js',
  /*输出文件地址*/
  output: {
    path: __dirname + "./dist",
    publicPath: '/dist/',
    filename: "[name].js"
  },
  /*解析文件后缀名*/
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', "css!sass")},
      {test: /\.(eot|svg|ttf|woff|woff2)$/,loader: 'file'},
      {test: /\.(png|jpg|gif|svg)$/,loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'}
    ]
  },
  /*其它解决方案配置*/
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  
  babel: {
    presets: ['es2015','stage-0'],
    plugins: ['transform-runtime']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
  /*压缩文件*/
   new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    /*生成css文件*/
    new ExtractTextPlugin('[name].css'),
  ],
   /*引入第三方插件*/
  externals: {
    swiper: 'window.swiper',
    jquery:'window.jQuery'
  }, 
};