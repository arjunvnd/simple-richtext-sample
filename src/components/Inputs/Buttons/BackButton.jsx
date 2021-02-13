import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

function BackButton({ handleClick }) {
  return (
    <>
      <Button onClick={handleClick} variant="warning">
        Back to Book
      </Button>
    </>
  );
}

BackButton.propTypes = {
  handleClick: PropTypes.func,
};

BackButton.defaultProps = {
  handleClick: () => null,
};

export default BackButton;
