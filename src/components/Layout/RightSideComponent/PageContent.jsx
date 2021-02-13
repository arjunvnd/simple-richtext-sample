import React from "react";
import PropTypes from "prop-types";
import EditButton from "../../Inputs/Buttons/EditButton";

function PageContent({ selectedPage }) {
  return (
    <article>
      <h2>
        {selectedPage.title}
        <EditButton />
      </h2>
      <div>{selectedPage.value}</div>
    </article>
  );
}

PageContent.propTypes = {
  selectedPage: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.string,
  }),
};

PageContent.defaultProps = {
  selectedPage: {},
};

export default PageContent;
