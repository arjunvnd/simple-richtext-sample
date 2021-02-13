import React from "react";
import PropTypes from "prop-types";
import BackButton from "../Inputs/Buttons/BackButton";
import SaveButton from "../Inputs/Buttons/SaveButton";

function ActionButtons({ handleSaveClick, handleBackClick }) {
  return (
    <div>
      <SaveButton handleClick={handleSaveClick} />
      <BackButton handleClick={handleBackClick} />
    </div>
  );
}

ActionButtons.propTypes = {
  handleBackClick: PropTypes.func,
};

export default ActionButtons;
