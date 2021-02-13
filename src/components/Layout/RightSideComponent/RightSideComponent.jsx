import React from "react";
import PropTypes from "prop-types";
import AddNewPageSection from "./AddNewPageSection";

function RightSideComponent(props) {
  return (
    <section className="right-side-component-container">
      <div>test</div>
      <AddNewPageSection />
    </section>
  );
}

RightSideComponent.propTypes = {};

export default RightSideComponent;
