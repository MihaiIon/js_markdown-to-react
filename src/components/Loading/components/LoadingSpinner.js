import React from "react";
import PropTypes from "prop-types";

// Libs
import { Transition } from "react-spring/renderprops";

// ------------------------------------------------------

// Component's Function
function LoadingSpinner({ componentName, show }) {
  return (
    <Transition
      items={show}
      from={{ transform: "translateY(30%)" }}
      enter={{ transform: "translateY(0%)" }}
      leave={{ transform: "translateY(30%)" }}
    >
      {item => props =>
        item && (
          <div className={`${componentName}_spinner`} style={props}>
            <div className={`${componentName}_spinner_outer-ring`} />
            <div className={`${componentName}_spinner_inner-ring`} />
          </div>
        )}
    </Transition>
  );
}

LoadingSpinner.propTypes = {
  show: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired
};

export default LoadingSpinner;
