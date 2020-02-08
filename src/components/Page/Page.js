import React, { useState } from "react";
import PropTypes from "prop-types";

// Core
import {
  getContentProps,
  getFooterProps,
  getHeaderProps,
  getNavigationProps
} from "./core/selectors";
import { FAKE_LOADING_SPEED } from "./core/constants";

// Components
import MobileNavigation from "../MobileNavigation";
import Navigation from "../Navigation";
import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import Loading from "../Loading";

// ------------------------------------------------------

// Component's classname root
export const C_NAME = "c-page";

// Component's Function
function Page({ data }) {
  const [selectedPageIndex, setPageIndex] = useState(0);
  const [isFakeLoading, setFakeLoadingState] = useState(false);

  // Helper
  const setPageIndexWithLoading = index => {
    let t1 = null;
    let t2 = null;
    // Show loading & swap page data
    setFakeLoadingState(true);
    t1 = setTimeout(() => {
      setPageIndex(index);
      return () => clearTimeout(t1);
    }, FAKE_LOADING_SPEED / 2);
    // Hide loading
    t2 = setTimeout(() => {
      setFakeLoadingState(false);
      return () => clearTimeout(t2);
    }, FAKE_LOADING_SPEED);
  };

  // Get props
  const content = getContentProps(data, selectedPageIndex);
  const footer = getFooterProps(data);
  const header = getHeaderProps(data, selectedPageIndex);
  const navigation = getNavigationProps(
    data,
    selectedPageIndex,
    setPageIndexWithLoading
  );

  // Render page
  return (
    <div className={C_NAME}>
      <MobileNavigation {...navigation}>
        <Navigation isShrinked {...navigation} />
      </MobileNavigation>
      <PageHeader componentName={C_NAME} {...header} />
      <PageContent componentName={C_NAME} {...content} />
      <PageFooter componentName={C_NAME} {...footer} />
      <Loading show={isFakeLoading} />
    </div>
  );
}

Page.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
    logoSmallPath: PropTypes.string.isRequired,
    faviconPath: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    accentColor: PropTypes.string.isRequired,
    copyrights: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        bgImagePath: PropTypes.string,
        bgColor: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.shape({})).isRequired
      })
    ).isRequired
  }).isRequired
};

export default Page;
