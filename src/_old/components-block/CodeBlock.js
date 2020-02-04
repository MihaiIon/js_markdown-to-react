import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { Prism as Highlight } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/styles/prism";
import SeparatorBlock from "./SeparatorBlock";

class CodeBlock extends Component {
  render() {
    const { language, content } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <Highlight className="b-code_pre" language={language} style={style}>
          {content}
        </Highlight>
      </Fragment>
    );
  }
}

CodeBlock.defaultProps = {
  language: "javascript"
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default CodeBlock;
