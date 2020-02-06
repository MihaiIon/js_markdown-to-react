import React from "react";
import PropTypes from "prop-types";

// Libs
import cn from "classnames-helper";

// Constants & Helpers
import { C_NAME } from "..";

// ------------------------------------------------------

// Component's Function
function NavigationItem({ isActive, value, action }) {
  return (
    <li className={cn(`${C_NAME}_item`, [isActive, "-active"])}>
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
