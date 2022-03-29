import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { getImageLink } from "../../helper/constants";

const SubjectItem = ({ item }) => {
  const url = getImageLink(item.cover.data.attributes.formats.medium.url);
  const blurUrl = getImageLink(item.cover.data.attributes.formats.thumbnail.url);

  return (
    <div className="subject flex flex-col md:flex-row mx-5 md:mx-0">
      <Image
        alt=""
        className="md:rounded-3xl"
        src={url}
        placeholder="blur"
        blurDataURL={blurUrl}
        height={300}
        width={400}
      />
      <div className="md:ml-4 mt-3 md:mt-0 w-full">
        <p className="text-2xl font-bold">{item.heading}</p>
        <p className="text-2xl font-bold mb-2">{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

SubjectItem.propTypes = {
  item: PropTypes.shape({
    cover: PropTypes.shape({
      data: PropTypes.shape({
        attributes: PropTypes.shape({
          formats: PropTypes.shape({
            medium: PropTypes.shape({
              url: PropTypes.string,
            }),
            thumbnail: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
    description: PropTypes.any,
    heading: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default SubjectItem;
