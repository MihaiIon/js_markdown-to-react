import { connect } from "react-redux";

// Actions
import { open, close } from "../../actions/quickmenu";

// Components
import QuickMenuButtonComponent from "./components/QuickMenuButton";
import QuickMenuItemComponent from "./components/QuickMenuItem";
import QuickMenu from "./QuickMenu";

const mapStateToProps = ({ quickmenu }) => ({ isQuickMenuOpen: quickmenu.isOpen });

const mapDispatchToProps = dispatch => ({
  openQuickMenu: () => dispatch(open()),
  closeQuickMenu: () => dispatch(close())
});

export const QuickMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickMenuItemComponent);

export const QuickMenuButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickMenuButtonComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickMenu);
