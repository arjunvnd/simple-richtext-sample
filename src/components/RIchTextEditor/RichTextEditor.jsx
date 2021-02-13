import React from "react";
import PropTypes from "prop-types";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

function RichTextEditor({ currentText }) {
  const [editorState, setEditorState] = React.useState(convertFromRaw(content));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
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
  currentText: PropTypes.node,
};

RichTextEditor.defaultProps = {
  currentText: "",
};

export default RichTextEditor;
