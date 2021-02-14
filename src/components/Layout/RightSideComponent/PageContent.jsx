import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import EditButton from "../../Inputs/Buttons/EditButton";

function PageContent({ selectedPage }) {
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <article>
      <h2>
        {selectedPage.title}
        <EditButton />
      </h2>
      <div dangerouslySetInnerHTML={createMarkup(selectedPage.description)} />
    </article>
  );
}

PageContent.propTypes = {
  selectedPage: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

PageContent.defaultProps = {
  selectedPage: {},
};

export default PageContent;
