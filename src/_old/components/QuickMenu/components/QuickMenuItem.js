import React, { Component } from "react";
import PropTypes from "prop-types";

/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

// Components
import { FaSquare } from "react-icons/fa";

// Helpers
import Scroll from "smoothscroll";
import { getFormatedLinkReference } from "../../../_helpers";

// Constants
const SCROLL_DURATION = 1000;

/**
 * Provides a smooth scroll to the targeted element.
 * @param {DOMElement} target HTML Element.
 */
const smoothScrollTo = target => Scroll(target, SCROLL_DURATION);

class QuickMenuItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      href: getFormatedLinkReference(props.value)
    };
  }

  // ------------------------------------------------------
  // Life Cycle

  onClickHandler() {
    const { href } = this.state;
    const { closeQuickMenu } = this.props;
    const target = document.getElementById(href);
    closeQuickMenu();
    smoothScrollTo(target);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { href } = this.state;
    const { value } = this.props;
    return (
      <li className="c-quick-menu_item">
        <a className="c-quick-menu_link" href={`#${href}`} onClick={() => this.onClickHandler()}>
          {value}
          <FaSquare className="c-quick-menu_bullet" />
        </a>
      </li>
    );
  }
}

QuickMenuItem.propTypes = {
  value: PropTypes.string.isRequired,
  closeQuickMenu: PropTypes.func.isRequired
};

export default QuickMenuItem;
