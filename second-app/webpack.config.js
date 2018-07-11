const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);



const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: resolveApp('build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info =>
      path.relative(resolveApp('src'), info.absoluteResourcePath).replace(/\\/g, '/')
  },
  devtool: "source-map",
  module: {
    rules: [
      // // copy-pasted from extracted react tutorial project:
      // {
      //   oneOf: [
      //     {
      //       test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //       loader: require.resolve('url-loader'),
      //       options: {
      //         limit: 10000,
      //         name: 'static/media/[name].[hash:8].[ext]',
      //       },
      //     },
      //     {
      //       test: /\.(js|jsx|mjs)$/,
      //       include: resolveApp('src'),
      //       loader: require.resolve('babel-loader'),
      //       options: {
      //         compact: true,
      //       },
      //     },
      //     {
      //       test: /\.css$/,
      //       loader: ExtractTextPlugin.extract(
      //         Object.assign(
      //           {
      //             fallback: {
      //               loader: require.resolve('style-loader'),
      //               options: {
      //                 hmr: false,
      //               },
      //             },
      //             use: [
      //               {
      //                 loader: require.resolve('css-loader'),
      //                 options: {
      //                   importLoaders: 1,
      //                   minimize: true,
      //                   sourceMap: 'source-map',
      //                 },
      //               },
      //               {
      //                 loader: require.resolve('postcss-loader'),
      //                 options: {
      //                   // Necessary for external CSS imports to work
      //                   // https://github.com/facebookincubator/create-react-app/issues/2677
      //                   ident: 'postcss',
      //                   plugins: () => [
      //                     require('postcss-flexbugs-fixes'),
      //                     autoprefixer({
      //                       browsers: [
      //                         '>1%',
      //                         'last 4 versions',
      //                         'Firefox ESR',
      //                         'not ie < 9', // React doesn't support IE8 anyway
      //                       ],
      //                       flexbox: 'no-2009',
      //                     }),
      //                   ],
      //                 },
      //               },
      //             ],
      //           },
      //           extractTextPluginOptions
      //         )
      //       )
      //     },
      //     {
      //       loader: require.resolve('file-loader'),
      //       // Exclude `js` files to keep "css" loader working as it injects
      //       // it's runtime that would otherwise processed through "file" loader.
      //       // Also exclude `html` and `json` extensions so they get processed
      //       // by webpacks internal loaders.
      //       exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
      //       options: {
      //         name: 'static/media/[name].[hash:8].[ext]',
      //       },
      //     },
      //   ]
      // }
      // the part made of different pieces found on the internet:
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
