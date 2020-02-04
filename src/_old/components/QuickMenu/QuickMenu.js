import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { QuickMenuItem, QuickMenuButton } from ".";
import { AnimatedComponent } from "../../components-anim";
import { Scroll } from "../../components-ui";

// Constants
import { IGNORE_ACTIONS_TIME } from "./core/constants";

class QuickMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransition: false
    };
  }

  // ------------------------------------------------------
  // Methods

  /**
   * Ignore the actions that are made during the 'open' and 'close'
   * animations of the Quick Menu.
   * @param {function} action
   */
  handleTransition(action) {
    const { isTransition } = this.state;
    if (!isTransition) {
      action();
      this.setState({ isTransition: true });
      setTimeout(() => {
        this.setState({ isTransition: false });
      }, IGNORE_ACTIONS_TIME);
    }
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { items, isQuickMenuOpen, closeQuickMenu } = this.props;
    return (
      <Fragment>
        <AnimatedComponent
          wrapper="aside"
          className="c-quick-menu o-overlay"
          mount={isQuickMenuOpen}
        >
          <div
            className="c-quick-menu_inner"
            tabIndex={0}
            onKeyPress={() => null}
            role="button"
            onClick={() => this.handleTransition(closeQuickMenu)}
          >
            <Scroll componentName="quick-menu">
              <ul className="c-quick-menu_list u-clearfix">
                {items.map(title => (
                  <QuickMenuItem key={title} value={title} />
                ))}
              </ul>
            </Scroll>
          </div>
        </AnimatedComponent>
        <QuickMenuButton handleTransition={action => this.handleTransition(action)} />
      </Fragment>
    );
  }
}

QuickMenu.propTypes = {
  isQuickMenuOpen: PropTypes.bool.isRequired,
  closeQuickMenu: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default QuickMenu;
