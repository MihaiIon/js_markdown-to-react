import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

// Components
import SeparatorBlock from "./SeparatorBlock";

// Helpers
import parseDataSyntax from "../_helpers/parseDataSyntax";
import classNamesHelper from "../_helpers/classNamesHelper";

class ImageBlock extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { isSmall } = this.props;
    return classNamesHelper("b-img", ["-small", isSmall]);
  }

  // ------------------------------------------------------
  // Render

  renderCaption() {
    const { caption } = this.props;
    return caption && <p className="b-img_caption">{parseDataSyntax(caption)}</p>;
  }

  render() {
    const { src } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className={`${this.getComponentClassNames()}`}>
          <img className="b-img_asset" src={src} alt={uniqid()} />
          {this.renderCaption()}
        </div>
      </Fragment>
    );
  }
}

ImageBlock.defaultProps = {
  caption: null
};

ImageBlock.propTypes = {
  isSmall: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string
};

export default ImageBlock;
