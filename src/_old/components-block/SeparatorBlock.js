import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../_helpers/classNamesHelper";

class SeparatorBlock extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { small } = this.props;
    return classNamesHelper("b-separator", "-hr", ["-small", small]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { squares } = this.props;
    return !squares ? (
      <hr className={this.getComponentClassNames()} />
    ) : (
      <div className="b-separator">
        <div className="b-separator_square" />
        <div className="b-separator_square" />
        <div className="b-separator_square" />
      </div>
    );
  }
}

SeparatorBlock.defaultProps = {
  small: false,
  squares: false
};

SeparatorBlock.propTypes = {
  small: PropTypes.bool,
  squares: PropTypes.bool
};

export default SeparatorBlock;
