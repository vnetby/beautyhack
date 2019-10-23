const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = {
  mode: 'development',
  entry: './site/js/index.js',
  output: {
    path: path.resolve(__dirname, 'site/js'),
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-shorthand-properties']
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader   : 'css-loader',
              options: {
                url      : false,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [ autoprefixer({grid: true}) ],
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
          // plugins: [ autoprefixer ]
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf|png)$/,
        loader: 'file-loader',
        options: {
          name: '../[path][name].[ext]',
          context: 'site'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename : '../css/main.min.css'
    })
  ],
  devtool   : 'source-map',
  watch: true
};
