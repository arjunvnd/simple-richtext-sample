import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

function TitleInput(props) {
  return (
    <InputGroup>
      <FormControl
        placeholder="Title"
        aria-label="Title"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}

TitleInput.propTypes = {};

export default TitleInput;
