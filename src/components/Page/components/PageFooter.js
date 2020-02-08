import React from "react";
import PropTypes from "prop-types";

// Component's Function
function PageFooter({ componentName, copyrights }) {
  return <footer className={`${componentName}_footer`}>{copyrights}</footer>;
}

PageFooter.propTypes = {
  componentName: PropTypes.string.isRequired,
  copyrights: PropTypes.string.isRequired
};

export default PageFooter;
