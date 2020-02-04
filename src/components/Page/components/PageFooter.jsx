import React from "react";
import PropTypes from "prop-types";

// Local
import { C_NAME } from "..";

// ------------------------------------------------------

// Component's Function
function PageFooter({ copyrights }) {
  return <footer className={`${C_NAME}_footer`}>{copyrights}</footer>;
}

PageFooter.propTypes = {
  copyrights: PropTypes.string.isRequired
};

export default PageFooter;
