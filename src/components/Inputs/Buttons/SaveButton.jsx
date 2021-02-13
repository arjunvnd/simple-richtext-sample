import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function SaveButton(props) {
  return (
    <>
      <Button variant="primary">Save Page</Button>
    </>
  );
}

SaveButton.propTypes = {
  handleClick: PropTypes.func,
};

SaveButton.defaultProps = {
  handleClick: () => null,
};

export default SaveButton;
