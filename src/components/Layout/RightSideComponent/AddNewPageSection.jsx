import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import AddButton from "../../Inputs/Buttons/AddButton";

function AddNewPageSection(props) {
  return (
    <Container className="add-new-page-section">
      <Row>
        <Col>
          <AddButton />
        </Col>
      </Row>
    </Container>
  );
}

AddNewPageSection.propTypes = {};

export default AddNewPageSection;
