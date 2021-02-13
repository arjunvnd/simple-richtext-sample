import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import { convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import TitleInput from "./TitleInput";
import RichTextEditor from "./RichTextEditor";
import ActionButtons from "./ActionButtons";
import { connect } from "react-redux";
import {
  addNewChapter,
  setAddState,
  setIdleState,
} from "../../redux/actions/basic";
import { EDITOR_STATES } from "../../config/constants";

const defaultChapterObj = {
  title: "Chapter Name",
  description: "<p>Your description goes here</p>",
};

function EditComponent({
  description,
  setEditorStateToIdle,
  currentEditorState,
  currentTitle,
  saveChapterToState,
}) {
  const [title, setTitle] = useState(
    currentEditorState === EDITOR_STATES.ADD
      ? defaultChapterObj.title
      : currentTitle
  );

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const contentBlock = htmlToDraft(
      currentEditorState === EDITOR_STATES.ADD
        ? defaultChapterObj.description
        : description
    );
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [description]);

  const handleSaveClick = () => {
    const payload = {
      title,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    saveChapterToState(payload);
  };

  const handleBackClick = () => {
    setEditorStateToIdle();
  };

  const handleTitleChage = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <TitleInput title={title} handleTitleChage={handleTitleChage} />
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <ActionButtons
        handleSaveClick={handleSaveClick}
        handleBackClick={handleBackClick}
      />
    </>
  );
}

EditComponent.propTypes = {
  description: PropTypes.node,
  setEditorStateToIdle: PropTypes.func,
  saveChapterToState: PropTypes.func,
};

EditComponent.defaultProps = {
  description: "<p>this is a test</p>",
  setEditorStateToIdle: () => null,
  saveChapterToState: () => null,
};

const mapStateToProps = (state) => ({
  currentEditorState: state.editorState,
});

const mapDispatchToProps = (dispatch) => ({
  setEditorStateToIdle: () => dispatch(setIdleState()),
  saveChapterToState: (data) => dispatch(addNewChapter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
