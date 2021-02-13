import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton({ handleClick }) {
  return (
    <div>
      <button
        className="icon-button add-btn"
        onClick={handleClick}
        type="button"
      >
        Add New Page
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

AddButton.propTypes = {
  handleClick: PropTypes.func,
};

AddButton.defaultProps = {
  handleClick: () => null,
};

export default AddButton;
