import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import GridRow from "./components/GridRow";
import GridColumn from "./components/GridColumn";
import SeparatorBlock from "../SeparatorBlock";

class GridBlock extends Component {
  render() {
    const { rows } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className="c-grid">
          {rows.map(({ isHeader, columns }) => (
            <GridRow isHeader={isHeader}>
              {columns.map(({ value, size, align }) => (
                <GridColumn size={size} align={align}>
                  {value}
                </GridColumn>
              ))}
            </GridRow>
          ))}
        </div>
      </Fragment>
    );
  }
}

GridBlock.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      isHeader: PropTypes.bool.isRequired,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          size: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default GridBlock;
