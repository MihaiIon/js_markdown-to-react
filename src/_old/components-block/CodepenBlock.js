import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import SeparatorBlock from "./SeparatorBlock";

class CodepenBlock extends Component {
  // ------------------------------------------------------
  // Methods

  getFormatLink() {
    const { hash, user } = this.props;
    return (
      <a className="b-codepen_link" href={`https://codepen.io/${user}/pen/${hash}`}>
        CodePen
      </a>
    );
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { hash, height, user } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className="b-codepen">
          <div
            className=" codepen"
            data-theme-id="dark"
            data-height={height}
            data-default-tab="result"
            data-user={user}
            data-slug-hash={hash}
            data-preview="true"
            style={{ height: `${height}px` }}
          />
          {/* <p className="b-codepen_text">
            {"See the Pen by "}
            <span className="b-codepen_user">{user}</span>
            {" on "}
            {this.getFormatLink()}
          </p> */}
        </div>
      </Fragment>
    );
  }
}

CodepenBlock.defaultProps = {
  height: 520
};

CodepenBlock.propTypes = {
  height: PropTypes.number,
  user: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired
};

export default CodepenBlock;
