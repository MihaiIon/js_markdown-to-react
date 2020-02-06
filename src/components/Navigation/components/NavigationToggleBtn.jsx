import React, { useContext } from "react";

// Libs
import { FaBars as MenuIcon } from "react-icons/fa";

// Constants & Helpers
import { C_NAME } from "..";

// Contexts
import { MobileNavigationContext } from "../../MobileNavigation";

// ------------------------------------------------------

// Component's Function
function NavigationToggleBtn() {
  const { toggleMobileNavigation } = useContext(MobileNavigationContext);
  return (
    <button type="button" className={`${C_NAME}_toggle`} onClick={toggleMobileNavigation}>
      <MenuIcon className={`${C_NAME}_toggle_icon`} />
    </button>
  );
}

export default NavigationToggleBtn;
