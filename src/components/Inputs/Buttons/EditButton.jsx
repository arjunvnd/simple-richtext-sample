import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setEditState } from "./../../../redux/actions/basic";

function EditButton({ handleClick, triggerEditMode }) {
  const handleEditClick = () => {
    triggerEditMode();
    handleClick();
  };
  return (
    <button className="icon-button" onClick={handleEditClick} type="button">
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}

EditButton.propTypes = {
  handleClick: PropTypes.func,
  triggerEditMode: PropTypes.func,
};

EditButton.defaultProps = {
  handleClick: () => null,
  triggerEditMode: () => null,
};

const mapDispatchToProps = (dispatch) => ({
  triggerEditMode: () => dispatch(setEditState()),
});

export default connect(null, mapDispatchToProps)(EditButton);
