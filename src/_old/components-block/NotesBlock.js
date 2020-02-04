import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import SeparatorBlock from "./SeparatorBlock";

// Helpers
import parseDataSyntax from "../_helpers/parseDataSyntax";

class NotesBlock extends Component {
  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className="b-notes">
          <h3 className="b-notes_h3">{`Note${items.length > 1 ? "s" : ""}`}</h3>
          <ul className="b-notes_list">
            {items.map(item => (
              <li key={item} className="b-notes_item">
                {parseDataSyntax(item)}
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

NotesBlock.defaultProps = {
  items: ["NO_ITEMS_PROVIDED"]
};

NotesBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

export default NotesBlock;
