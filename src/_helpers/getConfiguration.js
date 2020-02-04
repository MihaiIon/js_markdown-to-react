// =====================================================
// src / config.js
// =====================================================

/* eslint-disable  */

const { loadedProject } = require("../../config/default");
const project = require(`../../projects/${loadedProject.name}/`).default;

// Configuration
export default () => ({ project });
