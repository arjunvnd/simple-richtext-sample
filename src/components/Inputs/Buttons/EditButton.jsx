import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditButton({ handleClick }) {
  return (
    <button onClick={handleClick} type="button">
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}

EditButton.propTypes = {
  handleClick: PropTypes.func,
};

EditButton.defaultProps = {
  handleClick: () => null,
};

export default EditButton;
