import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { setSelectedChapter } from "../../redux/actions/basic";
import { EDITOR_STATES } from "../../config/constants";
import InfoText from "../InfoText";

function LeftSidePanel({
  ebookData,
  activeTab,
  updateSelectedChapter,
  editorState,
}) {
  const handlePageClick = (pageId) => {
    if (EDITOR_STATES.IDLE === editorState) updateSelectedChapter(pageId);
  };

  return (
    <>
      <ListGroup>
        {ebookData.length
          ? ebookData.map((ebookChapter) => {
              return (
                <ListGroup.Item
                  onClick={() => handlePageClick(Number(ebookChapter.id))}
                  action
                  active={ebookChapter.id === activeTab}
                >
                  {ebookChapter.title}
                </ListGroup.Item>
              );
            })
          : null}
      </ListGroup>
    </>
  );
}

LeftSidePanel.propTypes = {
  ebookData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  activeTab: PropTypes.number,
  handleClick: PropTypes.func,
};

LeftSidePanel.defaultProps = {
  ebookData: [],
  activeTab: 1,
  handleClick: () => null,
  editorState: EDITOR_STATES.IDLE,
};

const mapStateToProps = (state) => ({
  ebookData: state.ebookData,
  activeTab: state.selectedChapter,
  editorState: state.editorState,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedChapter: (pageId) => dispatch(setSelectedChapter(pageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidePanel);
