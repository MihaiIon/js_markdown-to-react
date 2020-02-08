import React from "react";
import PropTypes from "prop-types";

// Lib
import { Trail, config } from "react-spring/renderprops";

// Constants
import { SPRING_CONFIG } from "../../../constants/spring";
import { HEADERS_DELAY } from "../core/constants";

// ------------------------------------------------------

// Component's Function
function PageHeader({ bgColor, bgImagePath, componentName, title, subtitle }) {
  const style = {
    backgroundColor: bgColor,
    backgroundImage: bgImagePath ? `url('${bgImagePath}')` : "none"
  };
  return (
    <header className={`${componentName}_header`} style={style}>
      <div
        className={`${componentName}_header_overlay o-flex -center -middle -column`}
      >
        <Trail
          delay={HEADERS_DELAY}
          config={SPRING_CONFIG.SMOOTH}
          from={{ opacity: 0, transform: "translateY(100%)" }}
          to={{ opacity: 1, transform: "translateY(0%)" }}
          items={[
            {
              key: "header-title",
              component: (
                <h1 className={`${componentName}_header_title`}>{title}</h1>
              )
            },
            {
              key: "header-subtitle",
              component: (
                <h2 className={`${componentName}_header_subtitle`}>
                  {subtitle}
                </h2>
              )
            }
          ]}
        >
          {item => props => (
            <div key={item.key} style={props}>
              {item.component}
            </div>
          )}
        </Trail>
      </div>
    </header>
  );
}

PageHeader.defaultProps = {
  bgImagePath: null
};

PageHeader.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgImagePath: PropTypes.string,
  componentName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default PageHeader;
