// ======================================================
// Page / Core / Selectors
// ======================================================

/**
 *
 * @param {*} data
 * @param {number} selectedPageIndex
 */
export const getContentProps = (data, selectedPageIndex) =>
  data.pages[selectedPageIndex];

/**
 *
 * @param {*} data
 */
export const getFooterProps = data => ({
  copyrights: data.copyrights
});

/**
 *
 * @param {*} data
 * @param {number} selectedPageIndex
 */
export const getHeaderProps = (data, selectedPageIndex) => ({
  title: data.pages[selectedPageIndex].title,
  subtitle: data.pages[selectedPageIndex].subtitle,
  bgImagePath: data.pages[selectedPageIndex].bgImagePath,
  bgColor: data.pages[selectedPageIndex].bgColor
});

/**
 *
 * @param {*} data
 * @param {number} selectedPageIndex
 * @param {Function} setPageIndex
 */
export const getNavigationProps = (data, selectedPageIndex, setPageIndex) => ({
  name: data.name,
  logoSmallPath: data.logoSmallPath,
  links: data.pages.map((page, index) => ({
    isActive: index === selectedPageIndex,
    value: page.title,
    action: () => index !== selectedPageIndex && setPageIndex(index)
  }))
});
