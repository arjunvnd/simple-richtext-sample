import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidePanel from "../components/Layout/LeftSidePanel";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <LeftSidePanel />
        </Col>
        <Col sm={8}>sm=4</Col>
      </Row>
    </Container>
  );
}
