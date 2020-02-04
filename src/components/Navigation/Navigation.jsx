import React from "react";
import PropTypes from "prop-types";

// Libs
import ch from "classnames-helper";

// Components
import NavigationItem from "./components/NavigationItem";
import NavigationToggleBtn from "./components/NavigationToggleBtn";
import NavigationWrapper from "./components/NavigationWrapper";

// ------------------------------------------------------

// Component's classname root
export const C_NAME = "c-navigation";

// Component's Function
function Navigation({ isShrinked, logoSmallPath, name, links }) {
  return (
    <NavigationWrapper isShrinked={isShrinked}>
      {/* Logo & Mobile Toggle */}
      <div className={`${C_NAME}_mobile`}>
        <img className={`${C_NAME}_logo`} src={logoSmallPath} alt={`${name} | Logo`} />
        <NavigationToggleBtn />
      </div>
      {/* Links */}
      <ul className={`${C_NAME}_list`}>
        {links.map(link => (
          <NavigationItem key={`${C_NAME}-item--${link.value}`} {...link} />
        ))}
      </ul>
    </NavigationWrapper>
  );
}

Navigation.propTypes = {
  isShrinked: PropTypes.bool.isRequired,
  logoSmallPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  ).isRequired
};

export default Navigation;
