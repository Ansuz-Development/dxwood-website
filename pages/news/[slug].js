import React from "react";
import Image from "next/image";

import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "../../lib/api";
import SEOItem from "../../components/items/SEOItem";
import { fixContent, getFormattedImage, getImageUrl } from "../../helper/utils";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const NewsDetails = ({ news }) => {
  console.log(news);

  const { title, content, cover, publishedAt } = news.attributes;

  const coverUrl = getImageUrl(cover);
  const thumbnailUrl = getFormattedImage(cover, "thumbnail");

  const fixedContent = fixContent(content);

  return (
    <>
      <SEOItem seo={news.attributes?.seo} />
      <div className="relative">
        <div className="relative md:absolute w-full h-48 md:h-96 -z-10">
          <Image
            src={coverUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={thumbnailUrl}
          />
        </div>
        <div className="container md:px-20 md:py-32">
          <div className="bg-white min-h-screen py-4 md:p-6 md:shadow">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 md:space-x-2 overflow-x-hidden text-ellipsis">
                <li className="shrink-0">
                  <Link href="/#news">
                    <a className="text-primary-500 inline-flex items-center">Tin tức - sự kiện</a>
                  </Link>
                </li>
                <li>
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="#565757"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li className="whitespace-nowrap">
                  <a href="#" className="text-gray-500">
                    {title}
                  </a>
                </li>
              </ol>
            </nav>
            <div className="news-details">
              <h4 className="news-title">{title}</h4>
              <div className="news-date">
                {new Date(publishedAt).toLocaleDateString("vi-VN", dateOptions)}
              </div>
              <div className="news-content" dangerouslySetInnerHTML={{ __html: fixedContent }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;

export async function getStaticProps({ params }) {
  const news = await getPostBySlug(params.slug);

  console.log(news);

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news,
    },
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  const newSlugs = await getPostSlugs();

  const paths = newSlugs?.map((post) => `/news/${post.attributes.slug}`);

  return {
    paths: paths || [],
    fallback: "blocking",
  };
}
