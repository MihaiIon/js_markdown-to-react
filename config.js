const fs = require("fs");
const path = require("path");

// Make sure any symlinks in the project folder are resolved:
const BASE_DIR = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(BASE_DIR, relativePath);

// Relative paths
const appPath = "./src";
const publicPath = "./public";
const buildPath = "./dist";

module.exports = {};

module.exports.paths = {
  APP_PATH: resolvePath(appPath),
  APP_INDEX: resolvePath(`${appPath}/index.js`),
  BUILD_FOLDER: resolvePath(buildPath),
  BUILD_ASSETS_FOLDER: resolvePath(`${buildPath}/assets`),
  BUILD_STATIC_FILES_FOLDER: resolvePath(`${buildPath}/static`),
  DEV_SERVED_PATH: "/",
  PUBLIC_FOLDER: resolvePath(publicPath),
  PUBLIC_ASSETS_FOLDER: resolvePath(`${publicPath}/assets`),
  PUBLIC_STATIC_FILES_FOLDER: resolvePath(`${publicPath}/static`),
  PUBLIC_HTML: resolvePath(`${publicPath}/index.html`),
  ROOT: resolvePath(".")
};
