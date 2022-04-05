import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { getFormattedImage, shimmerBlur } from "../../../helper/utils";

const NewsItem = ({ item }) => {
  const { title, slug, cover, brief } = item.attributes;

  const coverUrl = getFormattedImage(cover, "small");

  return (
    <div className="news-item">
      <div className="image">
        {coverUrl && (
          <Image
            alt={title}
            src={coverUrl}
            draggable={false}
            placeholder="blur"
            blurDataURL={shimmerBlur(400, 300)}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="content">
        <Link href={`/news/${slug}`}>
          <a>
            <h6 className="hover:text-primary-500">{title}</h6>
          </a>
        </Link>
        <p className="body-1">{brief}</p>
        <div className="button flex flex-row items-center space-x-1">
          <Link href={`/news/${slug}`}>
            <a className="text-primary-500">Đọc thêm</a>
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.328 2.32801C5.23433 2.43235 5.1875 2.54701 5.1875 2.67201C5.1875 2.79701 5.23433 2.90635 5.328 3.00001L10.203 8.00001L5.328 13C5.23433 13.0937 5.1875 13.203 5.1875 13.328C5.1875 13.453 5.23433 13.5623 5.328 13.656C5.42167 13.7497 5.531 13.7965 5.656 13.7965C5.781 13.7965 5.89033 13.7548 5.984 13.6715L11.156 8.34351C11.2497 8.24985 11.2965 8.13518 11.2965 7.99951C11.2965 7.86385 11.2497 7.74918 11.156 7.65551L5.984 2.32751C5.89033 2.24418 5.781 2.20251 5.656 2.20251C5.531 2.20251 5.42167 2.24418 5.328 2.32751V2.32801Z"
              fill="#0052CC"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      title: PropTypes.string.isRequired,
      brief: PropTypes.string,
      content: PropTypes.string,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      cover: PropTypes.object.isRequired,
    }),
  }),
};

export default NewsItem;
