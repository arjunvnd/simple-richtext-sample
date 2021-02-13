import React from "react";
import PropTypes from "prop-types";

import { EditorState, convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import TitleInput from "./TitleInput";
import RichTextEditor from "./RichTextEditor";
import ActionButtons from "./ActionButtons";
import { connect } from "react-redux";
import { addNewChapter, setAddState } from "../../redux/actions/basic";

function EditComponent({ currentText }) {
  const [editorState, setEditorState] = React.useState(
    convertFromRaw(currentText)
  );

  const handleSaveClick = () => {};

  const handleBackClick = () => {};

  return (
    <>
      <TitleInput />
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <ActionButtons />
    </>
  );
}

EditComponent.propTypes = {};

const mapDispatchToProps = (dispatch) => ({});

export default connect()(EditComponent);
