import React from "react";
import PropTypes from "prop-types";

// Libs
// Core
// Components

// ------------------------------------------------------

// Component's Function
function PageContent({ componentName }) {
  return <div className={`${componentName}_content o-wrapper`} />;
}

PageContent.propTypes = {
  componentName: PropTypes.string.isRequired
};

export default PageContent;
