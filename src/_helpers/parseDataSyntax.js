// ======================================================
// Helpers / Parse Data Syntax
// ======================================================

import React from "react";
// import uniqid from "uniqid";

const uniqid = () => null;

// Create Elements
// ======================================================

/**
 *
 * @param {*} text
 * @param {*} href
 */
const createLink = (text, href) => (
  <a
    key={uniqid(text)}
    className="o-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

/**
 *
 * @param {*} str
 * @param {*} className
 */
const createSpan = (str, className) => (
  <span key={uniqid(str)} className={className}>
    {str}
  </span>
);

/**
 *
 * @param {*} str
 */
const createBoldText = str => <b key={uniqid(str)}>{str}</b>;

/**
 *
 * @param {*} str
 */
const createItalicText = str => <em key={uniqid(str)}>{str}</em>;

// Helpers
// ======================================================

/**
 *
 * @param {*} char
 */
const getTargetChar = char => {
  switch (char) {
    case "$":
      return "]";
    case "@":
      return ")";
    default:
      return null;
  }
};

/**
 *
 * @param {*} data
 * @param {*} start
 * @param {*} targetChar
 */
const findFragmentEndIndex = (data, start, targetChar) => {
  for (let i = start + 1; i < data.length; i += 1) {
    if (data.charAt(i) === targetChar) return i;
  }
  return null;
};

/**
 *
 * @param {*} str
 */
const parseFragment = str => {
  let content;
  switch (str.charAt(0)) {
    case "$":
      [, content] = str.split(/\[|\]/);
      return createSpan(content, str.charAt(1) === "$" ? "-accent" : "-main");
    case "@":
      [, content] = str.split(/\[|\]/);
      return createLink(content, str.split(/[()]/)[1]);
    default:
      return null;
  }
};

// Export
// ======================================================

/**
 *
 * @param {*} data
 */
export default data => {
  const len = data.length;
  const parsedData = [];
  let saved = 0;
  let isBold;
  let tmp;
  for (let i = 0, end; i < len; i += 1) {
    // If a special character has been found.
    if (/[$@]/.test(data.charAt(i))) {
      // Save current string.
      parsedData.push(data.substring(saved, i));
      // Find the end of the data structure.
      end = findFragmentEndIndex(data, i, getTargetChar(data.charAt(i)));
      // Extract data structure.
      tmp = data.substring(i, end);
      parsedData.push(parseFragment(tmp));
      // Adjust position.
      i += tmp.length + 1;
      saved = i;
    }

    //
    else if (data.charAt(i) === "*") {
      // Save current string.
      parsedData.push(data.substring(saved, i));
      // Check which it the fragment is bold or italic.
      isBold = i + 1 < data.length && data.charAt(i + 1 === "*");
      i += isBold ? 2 : 1;
      end = findFragmentEndIndex(data, i, "*");
      // Extract string
      tmp = data.substring(i, end);
      // Wrap the string with the right element,
      parsedData.push(isBold ? createBoldText(tmp) : createItalicText(tmp));
      // Adjust position.
      i += tmp.length + (isBold ? 2 : 1);
      saved = i;
    }
  }
  parsedData.push(data.substring(saved));
  return parsedData;
};
