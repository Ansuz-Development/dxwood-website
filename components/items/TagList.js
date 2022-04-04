import React from "react";
import PropTypes from "prop-types";
import TagItem, { TagItemProps } from "./TagItem";

const TagList = ({ tags }) => {
  if (!tags || !tags.length) return null;

  return (
    <div className="flex flex-row flex-wrap space-x-4">
      {tags.map((tag) => (
        <TagItem key={tag.id} item={tag} />
      ))}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(TagItemProps).isRequired,
};

export default TagList;
