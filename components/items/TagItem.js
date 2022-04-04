import React from "react";
import PropTypes from "prop-types";

const TagItem = ({ item }) => {
  return <div className="bg-primary-500 px-4 py-1 text-white button">{item.attributes.name}</div>;
};

export const TagItemProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }),
});

TagItem.propTypes = {
  item: TagItemProps.isRequired,
};

export default TagItem;
