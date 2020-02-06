import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Libs
import cn from "classnames-helper";

// Components
import MobileNavigationItem from "./components/MobileNavigationItem";
import MobileNavigationOverlay from "./components/MobileNavigationOverlay";

// ------------------------------------------------------

// Component's classname root
export const C_NAME = "c-mobile-navigation";

// Component's Context
export const MobileNavigationContext = createContext({ isOpen: false, setOpenState: () => {} });

// Component's Function
function MobileNavigation({ logoSmallPath, name, links, children }) {
  const [isOpen, set] = useState(false);
  const contextState = {
    isMobileNavigationOpen: isOpen,
    toggleMobileNavigation: () => set(prevState => !prevState),
    closeMobileNavigation: () => set(false)
  };
  return (
    <MobileNavigationContext.Provider value={contextState}>
      {children}
      <aside className={cn(C_NAME, [isOpen, "-open"])}>
        <div className={`${C_NAME}_header`}>
          <img className={`${C_NAME}_logo`} src={logoSmallPath} alt={`${name} | Logo`} />
        </div>
        <ul className={`${C_NAME}_list`}>
          {links.map(link => (
            <MobileNavigationItem key={`${C_NAME}-item--${link.value}`} {...link} />
          ))}
        </ul>
      </aside>
      <MobileNavigationOverlay show={isOpen} />
    </MobileNavigationContext.Provider>
  );
}

MobileNavigation.propTypes = {
  logoSmallPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  ).isRequired,
  children: PropTypes.node.isRequired // <Navigation />
};

export default MobileNavigation;
