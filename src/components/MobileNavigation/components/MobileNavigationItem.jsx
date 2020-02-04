import React, { useContext } from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";

// Local
import { C_NAME, MobileNavigationContext } from "..";

// ------------------------------------------------------

// Component's Function
function MobileNavigationItem({ isActive, value, action }) {
  const { closeMobileNavigation } = useContext(MobileNavigationContext);
  return (
    <li className={ch(`${C_NAME}_item`, ["-active", isActive])}>
      <button
        type="button"
        className={`${C_NAME}_link`}
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
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default MobileNavigationItem;
