// ======================================================
// Projects / Demo / OtherPage
// ======================================================

import {
  createCode,
  createCodepen,
  createConstructionZone,
  createGrid,
  createGridRow,
  createGridColumn,
  createHeader,
  createImage,
  createList,
  createNotes,
  createSection,
  createSeparator,
  createText,
  createVideo,
  GRID_COLUMN_SIZE as COL_SIZE,
  GRID_COLUMN_ALIGN as COL_ALIGN
} from "../blockFactory";

export default {
  title: "Other Page",
  subtitle: "Multiple pages",
  bgColor: "#6fa4d8",
  body: [createSection("Section 1", [createConstructionZone()])]
};
