import React from "react";
import PropTypes from "prop-types";
import AddNewPageSection from "./AddNewPageSection";
import PageContent from "./PageContent";
import DefaultPageView from "./DefaultPageView";
import { connect } from "react-redux";
import { EDITOR_STATES } from "../../../config/constants";
import EditComponent from "../../RIchTextEditor/EditComponent";

function RightSideComponent({ editorState, ebookData, selectedChapter }) {
  const selectedPage = ebookData.find((page) => page.id === selectedChapter);
  return (
    <section className="right-side-component-container">
      {editorState === EDITOR_STATES.IDLE ? (
        <DefaultPageView selectedPage={selectedPage} />
      ) : (
        <EditComponent
          currentTitle={selectedPage && selectedPage.title}
          description={selectedPage && selectedPage.description}
        />
      )}
    </section>
  );
}

RightSideComponent.propTypes = {
  editorState: PropTypes.string,
};

RightSideComponent.defaultProps = {
  editorState: EDITOR_STATES.IDLE,
};

const mapStateToProps = (state) => ({
  editorState: state.editorState,
  ebookData: state.ebookData,
  selectedChapter: state.selectedChapter,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RightSideComponent);
