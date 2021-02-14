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
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "colorPicker",
            "history",
          ],
          colorPicker: {
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            colors: [
              "rgb(211 211 211)",
              "rgb(26,188,156)",
              "rgb(84,172,210)",
              "rgb(44,130,201)",
              "rgb(147,101,184)",
              "rgb(71,85,119)",
              "rgb(204,204,204)",
              "rgb(65,168,95)",
              "rgb(0,168,133)",
              "rgb(61,142,185)",
              "rgb(41,105,176)",
              "rgb(85,57,130)",
              "rgb(40,50,78)",
              "rgb(0,0,0)",
              "rgb(247,218,100)",
              "rgb(251,160,38)",
              "rgb(235,107,86)",
              "rgb(226,80,65)",
              "rgb(163,143,132)",
              "rgb(239,239,239)",
              "rgb(255,255,255)",
              "rgb(250,197,28)",
              "rgb(243,121,52)",
              "rgb(209,72,65)",
              "rgb(184,49,47)",
              "rgb(124,112,107)",
              "rgb(209,213,216)",
            ],
          },
        }}
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
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
