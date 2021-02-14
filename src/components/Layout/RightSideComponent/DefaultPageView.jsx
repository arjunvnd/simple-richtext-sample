import React from "react";
import PropTypes from "prop-types";
import PageContent from "./PageContent";
import AddNewPageSection from "./AddNewPageSection";
import { connect } from "react-redux";
import InfoText from "../../InfoText";

function DefaultPageView({ selectedPage }) {
  return (
    <>
      <div className="default-view-container">
        {selectedPage ? (
          <PageContent selectedPage={selectedPage} />
        ) : (
          <InfoText />
        )}
      </div>
      <AddNewPageSection />
    </>
  );
}

DefaultPageView.propTypes = {
  selectedPage: PropTypes.shape({}),
};

// const mapStateToProps = (state) => ({
//   ebookData: state.ebookData,
//   selectedChapter: state.selectedChapter,
// });

export default DefaultPageView;
// export default connect(mapStateToProps)(DefaultPageView);
