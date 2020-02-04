import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import { getFormatedLinkReference } from "../_helpers";

class H1Block extends Component {
  render() {
    const { value, customProps } = this.props;
    return (
      <h1 id={getFormatedLinkReference(value)} className="o-h1 -main" {...customProps}>
        {value}
      </h1>
    );
  }
}

H1Block.defaultProps = {
  customProps: {}
};

H1Block.propTypes = {
  value: PropTypes.string.isRequired,
  customProps: PropTypes.shape({})
};

export default H1Block;
