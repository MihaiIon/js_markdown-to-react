import React from "react";
import PropTypes from "prop-types";

// Libs
import cn from "classnames-helper";

// ------------------------------------------------------

// Component's Function
function NavigationItem({ isActive, componentName, value, action }) {
  return (
    <li className={cn(`${componentName}_item`, [isActive, "-active"])}>
      <button
        type="button"
        className={`${componentName}_link`}
        onClick={action}
      >
        {value}
      </button>
    </li>
  );
}

NavigationItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default NavigationItem;
