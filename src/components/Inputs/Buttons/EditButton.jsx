import React from "react";
import PropTypes from "prop-types";

function EditButton({ handleClick }) {
  return (
    <button onClick={handleClick} type="button">
      <span className="glyphicon glyphicon-edit"></span>
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
