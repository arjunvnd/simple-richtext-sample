import React, { useEffect } from "react";
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

function EditComponent({ currentText, setEditorStateToIdle }) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    const contentBlock = htmlToDraft(currentText);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [currentText]);

  const handleSaveClick = () => {};

  const handleBackClick = () => {
    setEditorStateToIdle();
  };

  return (
    <>
      <TitleInput />
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
  currentText: PropTypes.node,
  setEditorStateToIdle: PropTypes.func,
};

EditComponent.defaultProps = {
  currentText: "<p>this is a test</p>",
  setEditorStateToIdle: () => null,
};

const mapDispatchToProps = (dispatch) => ({
  setEditorStateToIdle: () => dispatch(setIdleState()),
});

export default connect(null, mapDispatchToProps)(EditComponent);
