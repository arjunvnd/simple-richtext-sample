import React from "react";
import PropTypes from "prop-types";
import AddNewPageSection from "./AddNewPageSection";
import PageContent from "./PageContent";

function RightSideComponent(props) {
  return (
    <section className="right-side-component-container">
      <>
        <PageContent />
      </>
      <AddNewPageSection />
    </section>
  );
}

RightSideComponent.propTypes = {};

export default RightSideComponent;
