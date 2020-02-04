import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../../../_helpers/classNamesHelper";

class GridColumn extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { size, align } = this.props;
    return classNamesHelper("c-grid_col o-layout_item", size, align);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return <div className={this.getComponentClassNames()}>{children}</div>;
  }
}

GridColumn.propTypes = {
  align: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default GridColumn;
