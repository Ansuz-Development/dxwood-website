import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import { getImageUrl, getFormattedImage } from "../../helper/utils";
import TimelineItem from "../items/TimelineItem";

const AboutSection = ({ data }) => {
  const { title, description, cover, steps } = data;

  const url = getImageUrl(cover);
  const blurUrl = getFormattedImage(cover, "thumbnail");

  return (
    <section id="about">
      <div className="space-y-6 md:space-y-16">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>

        <div className="relative">
          <Image
            alt={title}
            src={url}
            placeholder="blur"
            blurDataURL={blurUrl}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <div className="px-4 md:px-12 lg:px-24">
            <TimelineItem steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  data: PropTypes.shape({
    cover: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    title: PropTypes.string.isRequired,
  }),
};

export default AboutSection;
