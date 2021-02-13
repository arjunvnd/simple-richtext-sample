import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

function TitleInput({ title, handleTitleChage }) {
  return (
    <InputGroup>
      <FormControl
        value={title}
        onChange={handleTitleChage}
        placeholder="Title"
        aria-label="Title"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}

TitleInput.propTypes = {};

export default TitleInput;
