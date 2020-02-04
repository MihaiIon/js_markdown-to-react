import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

// Helpers
import parseDataSyntax from "../_helpers/parseDataSyntax";

class ListBlock extends Component {
  render() {
    const { items, ordered } = this.props;
    return React.createElement(
      ordered ? "ol" : "ul",
      {
        className: "b-list"
      },
      items.map(data => (
        <li key={uniqid(data)} className="b-list_li">
          {parseDataSyntax(data)}
        </li>
      ))
    );
  }
}

ListBlock.defaultProps = {
  ordered: false
};

ListBlock.propTypes = {
  ordered: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ListBlock;
