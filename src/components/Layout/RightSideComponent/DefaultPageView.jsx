import React from "react";
import PropTypes from "prop-types";
import PageContent from "./PageContent";
import AddNewPageSection from "./AddNewPageSection";

function DefaultPageView(props) {
  return (
    <>
      <PageContent />
      <AddNewPageSection />
    </>
  );
}

DefaultPageView.propTypes = {};

export default DefaultPageView;
