import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import SeparatorBlock from "./SeparatorBlock";

// Helper
import parseDataSyntax from "../_helpers/parseDataSyntax";

class H2Block extends Component {
  render() {
    const { value, customProps } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <h2 className="o-h2 -border" {...customProps}>
          {parseDataSyntax(value)}
        </h2>
      </Fragment>
    );
  }
}

H2Block.defaultProps = {
  customProps: {}
};

H2Block.propTypes = {
  value: PropTypes.string.isRequired,
  customProps: PropTypes.shape({})
};

export default H2Block;
