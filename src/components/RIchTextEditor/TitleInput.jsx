import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

function TitleInput({ title, handleTitleChage }) {
  return (
    <>
      <label>
        <h6>Page Title</h6>
      </label>
      <InputGroup>
        <FormControl
          value={title}
          onChange={handleTitleChage}
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

TitleInput.propTypes = {};

export default TitleInput;
