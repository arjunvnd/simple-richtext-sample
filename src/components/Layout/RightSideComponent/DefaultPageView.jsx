import React from "react";
import PropTypes from "prop-types";
import PageContent from "./PageContent";
import AddNewPageSection from "./AddNewPageSection";
import { connect } from "react-redux";

function DefaultPageView({ ebookData, selectedChapter }) {
  return (
    <>
      <PageContent />
      <AddNewPageSection />
    </>
  );
}

DefaultPageView.propTypes = {};

const mapStateToProps = (state) => ({
  ebookData: state.ebookData,
  selectedChapter: state.selectedChapter,
});

export default connect(mapStateToProps)(DefaultPageView);
