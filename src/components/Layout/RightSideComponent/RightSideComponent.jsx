import React from "react";
import PropTypes from "prop-types";
import AddNewPageSection from "./AddNewPageSection";
import PageContent from "./PageContent";
import DefaultPageView from "./DefaultPageView";
import { connect } from "react-redux";
import { EDITOR_STATES } from "../../../config/constants";
import EditComponent from "../../RIchTextEditor/EditComponent";

function RightSideComponent({ editorState, ebookData, selectedChapter }) {
  return (
    <section className="right-side-component-container">
      {editorState === EDITOR_STATES.IDLE ? (
        <DefaultPageView />
      ) : (
        <EditComponent />
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
