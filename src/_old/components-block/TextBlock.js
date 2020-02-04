import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

// Helpers
import parseDataSyntax from "../_helpers/parseDataSyntax";

class TextBlock extends Component {
  render() {
    const { content } = this.props;
    return content.map(data => (
      <p key={uniqid(data)} className="o-p">
        {parseDataSyntax(data)}
      </p>
    ));
  }
}

TextBlock.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default TextBlock;
