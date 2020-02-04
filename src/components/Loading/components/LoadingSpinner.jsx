import React from "react";
import PropTypes from "prop-types";

// Libs
import { Transition } from "react-spring/renderprops";

// Local
import { C_NAME } from "..";

// ------------------------------------------------------

// Component's Function
function LoadingSpinner({ show }) {
  return (
    <Transition
      items={show}
      from={{ transform: "translateY(30%)" }}
      enter={{ transform: "translateY(0%)" }}
      leave={{ transform: "translateY(30%)" }}
    >
      {item => props =>
        item && (
          <div className={`${C_NAME}_spinner`} style={props}>
            <div className={`${C_NAME}_spinner_outer-ring`} />
            <div className={`${C_NAME}_spinner_inner-ring`} />
          </div>
        )}
    </Transition>
  );
}

LoadingSpinner.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingSpinner;
