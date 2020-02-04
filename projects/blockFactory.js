// ======================================================
// Projects / Helpers
// ======================================================

// Helpers
import { isString, filterStrings } from "../src/_helpers/index";

// Constants
import { BLOCK_TYPES as TYPES, GRID_COLUMN_SIZE, GRID_COLUMN_ALIGN } from "../src/constants";

// Exports
// ======================================================

export { GRID_COLUMN_SIZE, GRID_COLUMN_ALIGN } from "../src/constants";

/**
 *
 */
export const createCode = (array, language = "none") => ({
  type: TYPES.CODE,
  content: filterStrings(array).join("\n"),
  language
});

/**
 *
 * @param {*} config
 */
export const createCodepen = config => ({ type: TYPES.CODEPEN, ...config });

/**
 *
 */
export const createConstructionZone = () => ({
  type: TYPES.CONSTRUCTION_ZONE
});

/**
 *
 * @param {[]} rows
 */
export const createGrid = rows => ({
  type: TYPES.GRID,
  rows
});

/**
 *
 * @param {string} value Column's content.
 * @param {string} size Size option.
 * @param {string} align Alignment option.
 */
export const createGridColumn = (
  value,
  size = GRID_COLUMN_SIZE.FULL,
  align = GRID_COLUMN_ALIGN.LEFT
) => ({
  value,
  size,
  align
});

/**
 *
 * @param {[]} columns
 * @param {boolean} isHeader
 */
export const createGridRow = (columns, isHeader = false) => ({
  columns,
  isHeader
});

/**
 *
 * @param {string} title
 */
export const createHeader = value => ({ type: TYPES.HEADER, value });

/**
 *
 * @param {string} url
 */
export const createImage = (url, isSmall = false, caption = "") => ({
  type: TYPES.IMAGE,
  src: url,
  isSmall,
  caption
});

/**
 *
 * @param {[string]} items
 * @param {boolean} isOrdered
 */
export const createList = (items, isOrdered = false) => ({
  type: isOrdered ? TYPES.ORDERED_LIST : TYPES.UNORDERED_LIST,
  items: filterStrings(items)
});

/**
 *
 * @param {[string]} items
 */
export const createNotes = items => ({
  type: TYPES.NOTES,
  items: filterStrings(items)
});

/**
 *
 * @param {string} title
 * @param {[{*}]} content
 */
export const createSection = (title, content) => ({ title, content });

/**
 *
 * @param {boolean} isSmall
 */
export const createSeparator = (isSmall = false) => ({ type: TYPES.SEPARATOR, small: isSmall });

/**
 *
 * @param {[string]} content
 */
export const createText = content => ({
  type: TYPES.TEXT,
  content: content.filter(item => isString(item))
});

/**
 *
 * @param {string} url
 */
export const createVideo = url => ({ type: TYPES.VIDEO, url });
