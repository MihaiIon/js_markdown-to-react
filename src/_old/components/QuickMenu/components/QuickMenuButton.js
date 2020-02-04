import React, { Component } from "react";
import PropTypes from "prop-types";

/* eslint no-param-reassign: 0 */

// Helpers
import { randomBetweenHelper } from "../../../_helpers";
import classNamesHelper from "../../../_helpers/classNamesHelper";

const createRandomTransformation = (ref, interval, propertyName, minValue, maxValue, unit) => {
  const animate = () => {
    ref.current.style.transform = `${propertyName}(${randomBetweenHelper(
      minValue,
      maxValue
    ).toFixed(2)}${unit})`;
  };
  animate();
  setInterval(() => animate(), interval);
};

class QuickMenuButton extends Component {
  constructor(props) {
    super(props);

    // Squares
    this.outer1Ref = React.createRef();
    this.inner1Ref = React.createRef();
    this.outer2Ref = React.createRef();
    this.inner2Ref = React.createRef();
  }

  // ------------------------------------------------------
  // Life Cycle

  componentDidMount() {
    this.launchAnimations();
  }

  // ------------------------------------------------------
  // Methods

  onMouseEnterHandler() {
    const { isQuickMenuOpen, handleTransition, openQuickMenu } = this.props;
    if (!isQuickMenuOpen) {
      handleTransition(openQuickMenu);
    }
  }

  onClickHandler() {
    const { isQuickMenuOpen, closeQuickMenu, openQuickMenu, handleTransition } = this.props;
    handleTransition(isQuickMenuOpen ? closeQuickMenu : openQuickMenu);
  }

  getComponentClassNames() {
    const { isQuickMenuOpen } = this.props;
    return classNamesHelper("c-quick-menu_btn", ["-stop", isQuickMenuOpen]);
  }

  launchAnimations() {
    createRandomTransformation(this.outer1Ref, 1500, "scale", 0.98, 1.25, "");
    createRandomTransformation(this.inner1Ref, 2500, "rotate", 0, 360, "deg");
    createRandomTransformation(this.outer2Ref, 1000, "scale", 0.92, 1.08, "");
    createRandomTransformation(this.inner2Ref, 1500, "rotate", 0, 360, "deg");
  }

  // ------------------------------------------------------
  // Render

  render() {
    return (
      <button
        type="button"
        className={this.getComponentClassNames()}
        onClick={() => this.onClickHandler()}
        onMouseEnter={() => this.onMouseEnterHandler()}
      >
        <span ref={this.outer1Ref} className="c-quick-menu_btn_1-1">
          <span ref={this.inner1Ref} className="c-quick-menu_btn_1-2" />
        </span>
        <span ref={this.outer2Ref} className="c-quick-menu_btn_2-1">
          <span ref={this.inner2Ref} className="c-quick-menu_btn_2-2" />
        </span>
      </button>
    );
  }
}

QuickMenuButton.propTypes = {
  isQuickMenuOpen: PropTypes.bool.isRequired,
  openQuickMenu: PropTypes.func.isRequired,
  closeQuickMenu: PropTypes.func.isRequired,
  handleTransition: PropTypes.func.isRequired
};

export default QuickMenuButton;
