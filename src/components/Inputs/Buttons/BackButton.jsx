import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

function BackButton({ handleClick }) {
  return (
    <>
      <Button as="input" type="button" value="Back to Book" />
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
