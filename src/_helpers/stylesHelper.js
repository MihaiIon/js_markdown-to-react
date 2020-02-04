// ======================================================
// Helpers / Styles Helper
// ======================================================

/* eslint prefer-rest-params: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-param-reassign: 0 */

// Helpers
import { isString } from ".";

// Regex
const styleRegex = /^[a-z][a-zA-Z]+$/;

/**
 *
 * @param {*} arg Argument.
 */
const isArgumentValid = arg =>
  arg instanceof Array &&
  arg.length > 1 &&
  isString(arg[0]) &&
  styleRegex.test(arg[0]) &&
  isString(arg[1]);

/**
 *
 */
export default function() {
  const args = Array.prototype.slice.call(arguments);
  return {
    style: args.reduce((styles, arg) => {
      if (!isArgumentValid(arg)) return styles;
      styles[arg[0]] = arg[1];
      return styles;
    }, {})
  };
}
