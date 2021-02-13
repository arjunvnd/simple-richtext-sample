import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

function SaveButton(props) {
  return (
    <>
      <Button as="input" type="button" value="Save Page" />
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
