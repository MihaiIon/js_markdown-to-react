import React from "react";
import PropTypes from "prop-types";

// Libs
import { Transition } from "react-spring/renderprops";

// Components
import LoadingSpinner from "./components/LoadingSpinner";

// ------------------------------------------------------

// Component's classname root
const C_NAME = "c-loading";

// Component's Function
function Loading({ show }) {
  return (
    <Transition
      items={show}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => props =>
        item && (
          <div className={`${C_NAME} o-flex -middle -center`} style={props}>
            <LoadingSpinner componentName={C_NAME} show={show} />
          </div>
        )}
    </Transition>
  );
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Loading;
