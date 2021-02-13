import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

function LeftSidePanel({ ebookData, activeTab, handleClick }) {
  return (
    <>
      <ListGroup>
        {ebookData.map((ebookChapter) => {
          return (
            <ListGroup.Item
              onClick={handleClick}
              action
              active={ebookChapter.id === activeTab}
            >
              {ebookChapter.title}
            </ListGroup.Item>
          );
        })}
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
  ebookData: [
    { id: 1, title: "Chapter One" },
    { id: 2, title: "Chapter Two" },
    { id: 3, title: "Chapter Three" },
    { id: 4, title: "Chapter Four" },
  ],
  activeTab: 1,
  handleClick: () => null,
};

export default LeftSidePanel;
