import React from "react";
import PropTypes from "prop-types";

// Local
import { C_NAME } from "..";

// ------------------------------------------------------

// Component's Function
function PageHeader({ bgColor, bgImagePath, title, subtitle }) {
  const style = {
    backgroundColor: bgColor,
    backgroundImage: bgImagePath ? `url('${bgImagePath}')` : "none"
  };
  return (
    <header className={`${C_NAME}_header`} style={style}>
      <div className={`${C_NAME}_header_overlay o-flex -center -middle -column`}>
        <h1 className={`${C_NAME}_header_title`}>{title}</h1>
        <h2 className={`${C_NAME}_header_subtitle`}>{subtitle}</h2>
      </div>
    </header>
  );
}

PageHeader.defaultProps = {
  bgImagePath: null
};

PageHeader.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgImagePath: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default PageHeader;
