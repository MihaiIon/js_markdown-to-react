const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const PnpWebpackPlugin = require("pnp-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const merge = require("webpack-merge");
const common = require("./webpack.common");

const { paths } = require("./config");

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = false;

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = merge(common, {
  mode: "production",
  // Don't attempt to continue if there are any errors.
  bail: true,
  devtool: shouldUseSourceMap ? "source-map" : false,
  entry: paths.APP,
  output: {
    // The build folder.
    path: paths.BUILD,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    filename: "js/script.[name].js"
    // chunkFilename: "js/script.[name].chunk.js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: shouldUseSourceMap
      })
    ]
    // Automatically split vendor and commons
    // splitChunks: {
    //   chunks: "all",
    //   name: false
    // },
    // Keep the runtime chunk seperated to enable long term caching
    // runtimeChunk: true
  },
  plugins: [
    // Empty build folder
    new CleanWebpackPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.PUBLIC_HTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // This gives some necessary context to module not found errors, such as
    // the requesting resource.
    new ModuleNotFoundPlugin(paths.ROOT),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/styles.[name].css"
      // chunkFilename: "css/styles.[name].chunk.css"
    }),
    // Copy assets from selected project
    new CopyWebpackPlugin([
      {
        from: paths.PUBLIC_STATIC_FILES_FOLDER,
        to: paths.BUILD_STATIC_FILES_FOLDER
      },
      { from: paths.PUBLIC_ASSETS_FOLDER, to: paths.BUILD_ASSETS_FOLDER }
    ])
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    // new ManifestPlugin({
    //   fileName: "asset-manifest.json",
    //   publicPath
    // }),
    // Add configuration file
    // new ConfigWebpackPlugin(),
  ].filter(Boolean)
});
