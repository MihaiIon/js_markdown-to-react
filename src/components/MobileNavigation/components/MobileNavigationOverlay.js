import React, { useContext } from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";
import { Transition } from "react-spring/renderprops";

// Component's Function
function MobileNavigationOverlay({
  show,
  componentName,
  closeMobileNavigation
}) {
  return (
    <Transition
      items={show}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => props =>
        item && (
          <div
            className={`${componentName}_overlay`}
            onClick={closeMobileNavigation}
            onKeyPress={null}
            role="button"
            tabIndex="0"
            style={props}
            aria-label="Close Mobile Navigation"
          />
        )}
    </Transition>
  );
}

MobileNavigationOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
  closeMobileNavigation: PropTypes.func.isRequired
};

export default MobileNavigationOverlay;
