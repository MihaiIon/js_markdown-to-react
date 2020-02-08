import React, { useContext } from "react";
import PropTypes from "prop-types";

// Libs
import { FaBars as MenuIcon } from "react-icons/fa";

// Contexts
import { MobileNavigationContext } from "../../MobileNavigation";

// ------------------------------------------------------

// Component's Function
function NavigationToggleBtn({ componentName }) {
  const { toggleMobileNavigation } = useContext(MobileNavigationContext);
  return (
    <button
      type="button"
      className={`${componentName}_toggle`}
      onClick={toggleMobileNavigation}
    >
      <MenuIcon className={`${componentName}_toggle_icon`} />
    </button>
  );
}

NavigationToggleBtn.propTypes = {
  componentName: PropTypes.string.isRequired
};

export default NavigationToggleBtn;
