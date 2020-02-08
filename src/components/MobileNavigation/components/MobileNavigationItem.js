import React, { useContext } from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";

// ------------------------------------------------------

// Component's Function
function MobileNavigationItem({
  isActive,
  componentName,
  value,
  action,
  closeMobileNavigation
}) {
  return (
    <li className={ch(`${componentName}_item`, ["-active", isActive])}>
      <button
        type="button"
        className={`${componentName}_link`}
        onClick={() => {
          action();
          closeMobileNavigation();
        }}
      >
        {value}
      </button>
    </li>
  );
}

MobileNavigationItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  closeMobileNavigation: PropTypes.func.isRequired
};

export default MobileNavigationItem;
