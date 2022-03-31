import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { getFormattedImage } from "../../helper/utils";

const SubjectItem = ({ item }) => {
  const url = getFormattedImage(item.cover, "medium");
  const blurUrl = getFormattedImage(item.cover, "thumbnail");

  return (
    <div className="subject">
      {item.cover.data && (
        <Image
          alt=""
          className="md:rounded-3xl"
          src={url}
          draggable={false}
          placeholder="blur"
          blurDataURL={blurUrl}
          height={300}
          width={400}
        />
      )}
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
