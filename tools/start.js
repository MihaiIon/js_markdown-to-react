// ======================================================
// Tools / Config
// ======================================================

"use strict";

const chalk = require("chalk");
const inquirer = require("inquirer");
const { spawn } = require("child_process");
const { getProjects, updateLoadedProject } = require("./_helpers");

const { prompt, Separator } = inquirer;
const createSeparator = () => new Separator();
const getProjectAvailability = array =>
  array.length > 0 ? "" : chalk.dim("\n  -- no projects --");

// TYPES
// ======================================================

const TYPES = {
  CONFIRM: "confirm",
  INPUT: "input",
  LIST: "list",
  RAW_LIST: "rawlist"
};

// Main Question
// ======================================================

const mainInterface = async () => {
  const choices = [
    "Select and Load Project",
    "Select and Build Project",
    "Create and Start Project",
    `${chalk.red("x")} Exit`
  ];

  const { choice } = await prompt({
    type: TYPES.LIST,
    name: "choice",
    message: "What do you wish to do?",
    choices
  });

  switch (choice) {
    case choices[0]:
      return projectInterface;
    case choices[1]:
      return async () => await projectInterface(true);
    case choices[2]:
      return createProjectInterface;
    default:
      return null;
  }
};

// Load/Build Project
// ======================================================

const projectInterface = async isBuild => {
  const projects = getProjects();
  const choices = projects.concat([
    createSeparator(),
    `${chalk.yellow("<")} Back`,
    `${chalk.red("x")} Exit`
  ]);

  let isProject = false;
  const { choice } = await prompt({
    type: TYPES.LIST,
    name: "choice",
    message: `Which project do you want to build?${getProjectAvailability(projects)}`,
    choices,
    filter: value => {
      isProject = projects.reduce((cond, name) => cond || name === value, false);
      return value;
    },
    suffix: ""
  });

  // Back or Exit
  if (!isProject) {
    switch (choice) {
      case choices[projects.length + 1]:
        return mainInterface;
      default:
        return null;
    }
  }

  // Build selected project
  await updateLoadedProject(choice);
  spawn("node", [`./tools/${isBuild ? "build" : "load"}.js`], { stdio: "inherit" });
  return null;
};

// Create Project Wizard
// ======================================================

const createProjectInterface = async () => {
  //
  const projects = getProjects();
  const isProjectNameAvailable = name =>
    projects.reduce((cond, pName) => cond && name !== pName, true);

  //
  const isLengthValid = (value, name) => {
    if (value.length === 0) {
      console.log(chalk.white.bgRed(`The input '${name}' is of length '0'.`));
      return false;
    }
    return true;
  };

  //
  const matchesPattern = (value, name, pattern) => {
    if (!new RegExp(pattern).test(value)) {
      console.log(chalk.white.bgRed(`The '${name}' doesn't match the regular expression.`));
      return false;
    }
    return true;
  };

  //
  let input = null;
  let pattern = "^[a-zA-Z][a-zA-Z0-9-]*$";
  let isValid = true;

  // Projet's name
  let name = "";
  do {
    // Get input
    isValid = true;
    input = await prompt({
      name: "name",
      message: "Project name?",
      suffix: ` ${chalk.yellow("Must match regexp:")} ${chalk.magenta(pattern)}`
    });
    name = input.name;

    // Check pattern
    isValid = matchesPattern(name, "name", pattern);

    // Check availability
    if (isValid && !isProjectNameAvailable(name)) {
      isValid = false;
      console.log(chalk.white.bgRed(`There is already a project named: '${name}'.`));
    }
  } while (!isValid);

  // Organization
  let organization = "";
  if (isValid) {
    input = await prompt({
      name: "organization",
      message: "Organization?",
      suffix: " (default: none)"
    });
    organization = input.organization;
  }

  // Author(s)
  let author = "";
  if (isValid) {
    do {
      input = await prompt({
        name: "author",
        message: "Author?",
        suffix: chalk.yellow("* Required")
      });
      author = input.author;
      isValid = isLengthValid(author, "author");
    } while (!isValid);
  }

  // Email
  let email = "";
  if (isValid) {
    do {
      input = await prompt({
        name: "email",
        message: "Email?",
        suffix: chalk.yellow("* Required")
      });
      email = input.email;
      isValid = isLengthValid(email, "email");
    } while (!isValid);
  }

  console.log(chalk.black.bgYellow("Feature not yet implemented."));
  return null;
};

// Run Configuration Wizard
// ======================================================

console.log(`\nWelcome to the configuration ${chalk.green("wizard")}.`);
console.log("======================================\n");

(async () => {
  let fn = mainInterface;
  while (fn != null) {
    fn = await fn();
  }
})();
