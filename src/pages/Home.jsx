import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidePanel from "../components/Layout/LeftSidePanel";
import RightSideComponent from "../components/Layout/RightSideComponent/RightSideComponent";

export default function Home() {
  return (
    <Container className="body-container" fluid>
      <Row>
        <Col sm={4}>
          <LeftSidePanel />
        </Col>
        <Col sm={8}>
          <RightSideComponent />
        </Col>
      </Row>
    </Container>
  );
}
