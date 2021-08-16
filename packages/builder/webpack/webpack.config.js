const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

const cwd = process.cwd()

const config = {
  entry: path.resolve(cwd, 'lib'),
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'build'),
    library: {
      type: 'umd'
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(s[ac]ss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  externals: {
    'classnames': 'classnames',
    'react': 'react',
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'classnames': 'classnames'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
  ],
}

module.exports = config