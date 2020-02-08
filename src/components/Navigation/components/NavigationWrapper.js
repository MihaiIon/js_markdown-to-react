import React from "react";
import PropTypes from "prop-types";

// Libs
import cn from "classnames-helper";
import { Transition, config } from "react-spring/renderprops";

// Constants
import { SPRING_CONFIG } from "../../../constants/spring";

// ------------------------------------------------------

// Component's Function
function NavigationWrapper({ isShrinked, show, componentName, children }) {
  return (
    <Transition
      items={show}
      from={{ transform: "translateY(-100%)", opacity: 0 }}
      enter={{ transform: "translateY(0%)", opacity: 1 }}
      leave={{ transform: "translateY(-100%)", opacity: 0 }}
      config={SPRING_CONFIG.SMOOTH}
    >
      {item => props => (
        <nav
          className={cn(
            componentName,
            "o-container o-flex -middle -space-between",
            [isShrinked, "-shrink"]
          )}
          style={props}
        >
          {children}
        </nav>
      )}
    </Transition>
  );
}

NavigationWrapper.defaultProps = {
  show: true
};

NavigationWrapper.propTypes = {
  isShrinked: PropTypes.bool.isRequired,
  show: PropTypes.bool,
  componentName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavigationWrapper;
