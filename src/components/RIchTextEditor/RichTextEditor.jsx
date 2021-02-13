import React from "react";
import PropTypes from "prop-types";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

function RichTextEditor({ editorState, setEditorState }) {
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        wrapperClassName="rich-text-wrapper"
        editorClassName="rich-text-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}

RichTextEditor.propTypes = {
  editorState: PropTypes.node,
  setEditorState: PropTypes.func,
};

RichTextEditor.defaultProps = {
  currentText: "",
  setEditorState: () => null,
};

export default RichTextEditor;
