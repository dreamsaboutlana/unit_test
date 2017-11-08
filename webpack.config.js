const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');
const args = require('yargs').argv;

let styleLoader = ['style-loader', 'css-loader', 'sass-loader'];

const plugins = [
  new htmlPlugin(),
  new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}), //для модулей которые используется в нескольких модулях
  new webpack.HotModuleReplacementPlugin()
];

if (args.env && args.env.style) {
  plugins.push(
    new textPlugin({
      filename: '[name].css'
    })
  );
  styleLoader = textPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  });
}
module.exports = {
  entry: {
    main: './app.js',
    vendor: ['jquery']
  },
  // entry: './app.js', //file path
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js', //file name
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {presets: ['env']}
        }
      },
      // {
      //  test: /\.css$/,
      //  use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.s?css$/,
        use: styleLoader
      }
    ]
  },

  plugins,

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000,
    hot: !(args.env && args.env.style)
  }
};