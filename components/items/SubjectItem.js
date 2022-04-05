import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { getFormattedImage } from "../../helper/utils";

const SubjectItem = ({ item }) => {
  const url = getFormattedImage(item.cover, "small");
  const blurUrl = getFormattedImage(item.cover, "thumbnail");

  return (
    <div className="subject-item">
      <div className="image">
        {item.cover.data && (
          <Image
            alt={item.title}
            src={url}
            draggable={false}
            placeholder="blur"
            blurDataURL={blurUrl}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="content">
        <h5 className="text-primary-500 uppercase">
          {item.heading}: {item.title}
        </h5>
        <p className="body-1 whitespace-pre-line">{item.description}</p>
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
    heading: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default SubjectItem;
