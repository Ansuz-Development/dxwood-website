import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getFormattedImage, shimmerBlur } from "../../helper/utils";

const MentorItem = ({ item }) => {
  const url = getFormattedImage(item.avatar, "small");

  return (
    <div className="mentor-item">
      <div className="w-20 h-20 ">
        {item.avatar.data && (
          <Image
            alt={item.title}
            className="w-full h-full object-cover rounded-full"
            src={url}
            draggable={false}
            placeholder="blur"
            blurDataURL={shimmerBlur(80, 80)}
            height={80}
            width={80}
            loading="lazy"
          />
        )}
      </div>
      <div className="md:ml-4 md:mt-0 w-full">
        <h5>{item.name}</h5>
        <p className="body-1 mt-1">{item.title}</p>
        <p className="body-2 overflow-ellipsis mt-4">{item.description}</p>
      </div>
    </div>
  );
};

MentorItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.shape({
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
    description: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default MentorItem;
