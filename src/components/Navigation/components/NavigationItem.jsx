import React from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";

// Constants & Helpers
import { C_NAME } from "..";

// ------------------------------------------------------

// Component's Function
function NavigationItem({ isActive, value, action }) {
  return (
    <li className={ch(`${C_NAME}_item`, ["-active", isActive])}>
      <button type="button" className={`${C_NAME}_link`} onClick={action}>
        {value}
      </button>
    </li>
  );
}

NavigationItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default NavigationItem;
