import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setAddState } from "../../../redux/actions/basic";

function AddButton({ handleClick, toggleAddState }) {
  const onAddButtonClick = () => {
    toggleAddState();
    handleClick();
  };

  return (
    <div>
      <button
        className="icon-button add-btn"
        onClick={onAddButtonClick}
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
  toggleAddState: PropTypes.func,
};

AddButton.defaultProps = {
  handleClick: () => null,
  toggleAddState: () => null,
};

const mapDispatchToProps = (dispatch) => ({
  toggleAddState: () => dispatch(setAddState()),
});

export default connect(null, mapDispatchToProps)(AddButton);
