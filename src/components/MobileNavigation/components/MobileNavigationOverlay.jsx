import React, { useContext } from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";
import { Transition } from "react-spring/renderprops";

// Local
import { C_NAME, MobileNavigationContext } from "..";

// ------------------------------------------------------

// Component's Function
function MobileNavigationOverlay({ show }) {
  const { closeMobileNavigation } = useContext(MobileNavigationContext);
  return (
    <Transition items={show} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {item => props =>
        item && (
          <div
            className={`${C_NAME}_overlay`}
            onClick={closeMobileNavigation}
            onKeyPress={null}
            role="button"
            tabIndex="0"
            style={props}
          />
        )}
    </Transition>
  );
}

MobileNavigationOverlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default MobileNavigationOverlay;
