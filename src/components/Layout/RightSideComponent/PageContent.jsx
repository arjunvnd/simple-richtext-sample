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
  selectedPage: {
    id: 1,
    title: "Chapter One",
    value: `Fusce laoreet maximus mi, vitae tristique mi lacinia ac. Fusce
       et diam arcu. Phasellus dolor arcu, accumsan vel porttitor ac, 
       tincidunt eget libero. Duis dapibus posuere lacus quis tempus. 
       Sed a eros faucibus, egestas turpis id, pulvinar purus. Donec bibendum 
       lorem ligula, sed porttitor ligula congue quis. Duis euismod facilisis
       felis. Praesent tellus purus, ultricies eget iaculis id, placerat vulputate
        quam. Etiam lacinia elementum lacinia. Ut convallis lacus vitae ex sodales
         condimentum. Nunc vel porttitor sem. Suspendisse ut augue elit. Orci varius 
         natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Class aptent taciti sociosqu 
      ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  },
};

export default PageContent;
