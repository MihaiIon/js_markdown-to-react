import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../../../_helpers/classNamesHelper";

class GridRow extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { isHeader } = this.props;
    return classNamesHelper("c-grid_row o-layout", ["-header", isHeader]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return <div className={this.getComponentClassNames()}>{children}</div>;
  }
}

GridRow.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default GridRow;
