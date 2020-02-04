// ======================================================
// Helpers / Selectors
// ======================================================

// Document
export const getDocumentTitle = project => project.documentTitle;

// Navigation
export const getNavigationItems = project =>
  project.pages.map((page, i) => ({ id: i, text: page.title }));

// Page
export const getBody = page => page.body;

// Quick Menu
export const getQuickMenuItems = body => body.map(section => section.title);

// Header
export const getHeaderProps = page => ({
  bgColor: page.bgColor,
  bgImage: page.bgImage,
  title: page.title,
  titleColor: page.titleColor,
  subtitle: page.subtitle,
  subtitleColor: page.subtitleColor
});
