// ======================================================
// Helpers / Commun
// ======================================================

/**
 * Returns "true" if the object is a string.
 * @param {*} obj JavaScript object.
 */
export const isString = obj => typeof obj === "string" || obj instanceof String;

/**
 *
 * @param {[string]} array
 */
export const filterStrings = array => array.filter(arg => isString(arg));

/**
 *
 * @param {string} value
 */
export const getFormatedLinkReference = value =>
  `${value
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[éèê]/g, "e")
    .replace(/[à]/g, "a")}`;

/**
 *
 */
export const randomBetweenHelper = (min, max) =>
  Math.random() * (max - min) + min;
