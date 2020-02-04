// ======================================================
// Projects / Demo / Home
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
  title: "Demo",
  subtitle: "Website Demo",
  bgImage: "./assets/bg.jpg",
  body: [
    createSection("Section 1", [
      createText([
        "Some Text.",
        "Some $[highlighted text].",
        "Some other $$[highlighted text].",
        "Some **bold text**.",
        "A @[simple link](http://www.google.com/)"
      ])
    ]),
    createSection("Section 2", [
      createHeader("List Block"),
      createList(["Some item.", "Some other item."]),
      createSeparator(true),
      createList(["Some item.", "Some other item."], true),
      createHeader("Notes Block"),
      createNotes(["Some notes.", "Some other notes."]),
      // createHeader("Grid Block"),
      // createGrid([
      //   createGridRow([createGridColumn("Center", COL_SIZE.FULL, COL_ALIGN.CENTER)], true),
      //   createGridRow([
      //     createGridColumn("Left", COL_SIZE.HALF, COL_ALIGN.LEFT),
      //     createGridColumn("Right", COL_SIZE.HALF, COL_ALIGN.RIGHT)
      //   ])
      // ]),
      createHeader("Code Block"),
      createCode(
        ["var someAwesomeCode = function() {", '  return "Some cool content";', "};"],
        "javascript"
      )
    ]),
    createSection("Section 3", [
      createHeader("Image Block"),
      createImage("./assets/demo.jpg"),
      createImage("./assets/demo.jpg", true, "Smaller image with $[caption].")
    ]),
    createSection("Section 4", [
      createHeader("Codepen Block"),
      createCodepen({
        user: "MihaiIonescu",
        hash: "ErVVpN"
      }),
      createHeader("Video Block"),
      createVideo("https://www.youtube.com/watch?v=iGpuQ0ioPrM")
    ])
  ]
};
