#!/usr/bin/env node

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

const config = {
  entry: path.resolve(process.cwd(), 'lib'),
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'build'),
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

const build = async () => {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config)

    console.log('BUILDING')

    compiler.run((err) => {
      if (err) {
        console.log('ERROR')
        reject(err)
      }
      console.log('SUCCESS')
      resolve(true)
    })
  })
}

build()