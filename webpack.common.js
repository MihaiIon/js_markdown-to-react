const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PnpWebpackPlugin = require("pnp-webpack-plugin");

const { paths } = require("./config");

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = false;

// style files regexes
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve("postcss-loader"),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009"
            },
            stage: 3
          })
        ],
        sourceMap: shouldUseSourceMap
      }
    }
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: shouldUseSourceMap
      }
    });
  }
  return loaders;
};

module.exports = {
  // optimization: {
  //   // Automatically split vendor and commons
  //   splitChunks: {
  //     chunks: "all",
  //     name: false
  //   },
  //   // Keep the runtime chunk seperated to enable long term caching
  //   runtimeChunk: true
  // },
  resolveLoader: {
    plugins: [
      // Also related to Plug'n'Play, but this time it tells Webpack to load its loaders
      // from the current package.
      PnpWebpackPlugin.moduleLoader(module)
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },

      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(jsx?)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: require.resolve("react-dev-utils/eslintFormatter"),
              eslintPath: require.resolve("eslint")
            },
            loader: require.resolve("eslint-loader")
          }
        ],
        include: paths.APP
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
          // {
          //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          //   loader: require.resolve("url-loader"),
          //   options: {
          //     limit: 10000,
          //     name: "static/[name].[ext]"
          //     // name: "static/[name].[hash:8].[ext]"
          //   }
          // },
          // Process application JS with Babel.
          {
            test: /\.(jsx?)$/,
            include: paths.APP,
            loader: require.resolve("babel-loader"),
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              compact: true
            }
          },
          // Process any JS outside of the app with Babel.
          // Unlike the application JS, we only compile the standard ES features.
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve("babel-preset-react-app/dependencies"),
                  { helpers: true }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: shouldUseSourceMap
            }
          },
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // `MiniCSSExtractPlugin` extracts styles into CSS
          // files. If you use code splitting, async bundles will have their own separate CSS chunk file.
          // By default we support CSS Modules with the extension .module.css
          {
            test: cssRegex,
            loader: getStyleLoaders({
              importLoaders: 1,
              sourceMap: shouldUseSourceMap
            }),
            // Don't consider CSS imports dead code even if the
            // containing package claims to have no side effects.
            // Remove this when webpack adds a warning or an error for this.
            // See https://github.com/webpack/webpack/issues/6571
            sideEffects: true
          },
          // Opt-in support for SASS. The logic here is somewhat similar
          // as in the CSS routine, except that "sass-loader" runs first
          // to compile SASS files into CSS.
          // By default we support SASS Modules with the
          // extensions .module.scss or .module.sass
          {
            test: sassRegex,
            loader: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: false
              },
              "sass-loader"
            ),
            // Don't consider CSS imports dead code even if the
            // containing package claims to have no side effects.
            // Remove this when webpack adds a warning or an error for this.
            // See https://github.com/webpack/webpack/issues/6571
            sideEffects: true
          }
          // "file" loader makes sure assets end up in the `build` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          // {
          //   loader: require.resolve("file-loader"),
          //   // Exclude `js` files to keep "css" loader working as it injects
          //   // it's runtime that would otherwise be processed through "file" loader.
          //   // Also exclude `html` and `json` extensions so they get processed
          //   // by webpacks internal loaders.
          //   exclude: [/\.(jsx?)$/, /\.html$/, /\.json$/],
          //   options: {
          //     name: "static/[name].[ext]"
          //   }
          // }
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ]
      }
    ]
  },
  plugins: [
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: paths.PUBLIC_FOLDER
    })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  // Turn off performance processing because we utilize
  // our own hints via the FileSizeReporter
  performance: false
};
