import React from "react";
import PropTypes from "prop-types";

function AddButton({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick} type="button">
        <span className="glyphicon glyphicon-plus"></span>
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
