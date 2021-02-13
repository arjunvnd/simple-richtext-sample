import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

function LeftSidePanel({ ebookData, activeTab, handleClick }) {
  return (
    <>
      <ListGroup>
        {ebookData.length ? (
          ebookData.map((ebookChapter) => {
            return (
              <ListGroup.Item
                onClick={handleClick}
                action
                active={ebookChapter.id === activeTab}
              >
                {ebookChapter.title}
              </ListGroup.Item>
            );
          })
        ) : (
          <>Please add a new page to start</>
        )}
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
};

const mapStateToProps = (state) => ({
  ebookData: state.ebookData,
});

export default connect(mapStateToProps)(LeftSidePanel);
