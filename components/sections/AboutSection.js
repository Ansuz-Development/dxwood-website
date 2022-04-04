import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { getImageUrl, getFormattedImage } from "../../helper/utils";

const AboutSection = ({ data }) => {
  const { title, description, cover } = data;

  const url = getImageUrl(cover);
  const blurUrl = getFormattedImage(cover, "thumbnail");

  return (
    <section id="about">
      <div className="space-y-6 md:space-y-16">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
        <div className="image-16x9">
          <Image
            alt={title}
            src={url}
            placeholder="blur"
            blurDataURL={blurUrl}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cover: PropTypes.object.isRequired,
  }),
};

export default AboutSection;
