import React from "react";
import PropTypes from "prop-types";
import BackButton from "../Inputs/Buttons/BackButton";
import SaveButton from "../Inputs/Buttons/SaveButton";

function ActionButtons(props) {
  return (
    <div>
      <SaveButton />
      <BackButton />
    </div>
  );
}

ActionButtons.propTypes = {};

export default ActionButtons;
