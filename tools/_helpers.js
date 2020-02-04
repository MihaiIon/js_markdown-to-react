// ======================================================
// Tools / Helpers
// ======================================================

/* eslint-disable */

const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const paths = require("../config/paths");

//
// ======================================================

/**
 *
 */
module.exports.copyPublicFolderToBuild = () => {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
  console.log(chalk.cyan("> Copied public folder."));
};

/**
 *
 */
module.exports.copyProjectAssetsToPublicFolder = () => {
  if (fs.existsSync(paths.projectAssetsPath)) {
    if (fs.existsSync(paths.appAssetsPath)) {
      fs.emptyDirSync(paths.appAssetsPath);
      console.log(chalk.cyan("> Cleared App 'assets' folder."));
    } else {
      fs.mkdirSync(paths.appAssetsPath);
      console.log(chalk.green("> Created App 'assets' folder."));
    }
    fs.copySync(paths.projectAssetsPath, paths.appAssetsPath, {
      dereference: true,
      filter: file => file !== paths.appHtml
    });
    console.log(chalk.cyan("> Copied project's assets to public folder."));
  } else {
    console.log(chalk.yellow("...No assets were found in the the project's directory.\n"));
  }
};

/**
 *
 */
module.exports.getProjects = () => {
  const pathToProjects = path.resolve(__dirname, "../projects/");
  return fs
    .readdirSync(pathToProjects)
    .filter(name => fs.lstatSync(path.join(pathToProjects, name)).isDirectory())
    .filter(name => name !== ".git");
};

// > Tool / Start
// ======================================================

//
const getConfigPath = () => path.resolve(__dirname, "../config/default.js");

module.exports.updateLoadedProject = async name => {
  const configPath = getConfigPath();
  const data = await fs.readFileSync(configPath, "utf8");
  await fs.writeFileSync(
    configPath,
    data.replace(/(?<=const\sloadedProjectName\s=\s)".*"(?=;\s)/, `"${name}"`)
  );
  return;
};
