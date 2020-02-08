// ======================================================
// Components / App / Core / Helpers
// ======================================================

/**
 *
 * @param {string} [str=null]
 */
export const isHexColor = (str = null) =>
  typeof str === "string" && /#?[a-f0-9]{6}/.test(str.toLowerCase());

/**
 *
 * @param {*} [rawData={}]
 */
export const buildData = (rawData = {}) => ({
  name: rawData.name || "MISSING_NAME",
  logoPath: rawData.logoPath || "MISSING_LOGO_PATH",
  logoSmallPath: rawData.logoSmallPath || "MISSING_LOGO_SMALL_PATH",
  faviconPath: rawData.faviconPath || "MISSING_FAVICON_PATH",
  copyrights: rawData.copyrights || "MISSING_COPYRIGHTS",
  primaryColor: isHexColor(rawData.primaryColor)
    ? rawData.primaryColor
    : "#ff0000",
  accentColor: isHexColor(rawData.accentColor)
    ? rawData.accentColor
    : "#00ff00",
  pages:
    rawData.pages && rawData.pages instanceof Array
      ? rawData.pages.map(page => ({
          title: page.title || "MISSING_TITLE",
          subtitle: page.subtitle || "MISSING_SUBTITLE",
          bgImagePath: page.bgImagePath || null,
          bgColor: isHexColor(page.bgColor) ? page.bgColor : "#666666",
          content: page.content
        }))
      : [
          {
            title: "MISSING_TITLE",
            subtitle: "MISSING_SUBTITLE",
            bgImagePath: null,
            bgColor: "#eeeeee",
            content: []
          },
          {
            title: "MISSING_TITLE_2",
            subtitle: "MISSING_SUBTITLE_2",
            bgImagePath: null,
            bgColor: "#eeeeee",
            content: []
          }
        ]
});
