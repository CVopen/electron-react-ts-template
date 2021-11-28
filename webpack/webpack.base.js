const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@viz': path.join(__dirname, '../', 'app/viz/index1.html')
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: { cacheDirectory: true }
            }
          },
          {
            test: /\.css$/,
            use: [
              isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            // type: "asset/resource", file-loader的效果
            // type: "asset/inline", url-loader
            type: "asset",
            generator: {
              filename: "img/[name].[hash:6][ext]"
            },
            parser: {
              dataUrlCondition: {
                maxSize: 100 * 1024
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!electron.js'] })
  ]
}


