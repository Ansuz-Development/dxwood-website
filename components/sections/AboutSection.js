import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { getImageUrl, getFormattedImage } from "../../helper/utils";

const AboutSection = ({ data }) => {
  const { title, description, cover } = data;

  const url = getImageUrl(cover);
  const blurUrl = getFormattedImage(cover, "thumbnail");

  return (
    <section>
      <div className="space-y-16">
        <div className="text-center max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="image-16x9">
          <Image
            alt={title}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}`}
            placeholder="blur"
            blurDataURL={blurUrl}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

export default AboutSection;
