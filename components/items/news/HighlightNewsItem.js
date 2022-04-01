import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { getFormattedImage } from "../../../helper/utils";

const HighlightNewsItem = ({ item }) => {
  const { title, slug, cover } = item.attributes;

  const coverUrl = getFormattedImage(cover, "small");
  const thumbnailUrl = getFormattedImage(cover, "thumbnai");

  return (
    <div>
      <div className="relative pb-70">
        <Image
          alt={title}
          src={coverUrl}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={thumbnailUrl}
        />
      </div>
      <h4>
        <Link href={`/news/${slug}`}>
          <a>{title}</a>
        </Link>
      </h4>
    </div>
  );
};

export const NewsItemProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brief: PropTypes.string,
    content: PropTypes.string,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cover: PropTypes.object.isRequired,
  }),
});

HighlightNewsItem.propTypes = {
  item: NewsItemProps.isRequired,
};

export default HighlightNewsItem;
