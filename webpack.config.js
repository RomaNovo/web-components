const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
  entry: {
    main: './src/scripts/global.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          query: {
            pretty: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/videos/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]?[hash]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.bundle.css?[hash]',
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'teacher.html',
      template: 'src/teacher.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: 'src/contact.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'advantages.html',
      template: 'src/advantages.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'QApage.html',
      template: 'src/QApage.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'account.html',
      template: 'src/account.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'accountPay.html',
      template: 'src/accountPay.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'accountReccomend.html',
      template: 'src/accountReccomend.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'accountBooks.html',
      template: 'src/accountBooks.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/404.pug',
      minify: false,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'platform.html',
      template: 'src/platform.pug',
      minify: false,
      chunks: ['main'],
    }),
  ],

  devtool: NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
