import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import HighlightNewsItem, { NewsItemProps } from "../items/news/HighlightNewsItem";

// import Swiper styles
const NewsListSection = ({ data }) => {
  const { title, news } = data;

  const hightlightNews = news[0];
  const sideNews = news.slice(1, 4);
  const otherNews = news.slice(4);

  return (
    <section>
      <div className="space-y-6">
        <h4>{title}</h4>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {hightlightNews && <HighlightNewsItem item={hightlightNews} />}
            {/* {sideNews.length > 0 && <HighlightNewsItem item={hightlightNews} />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

NewsListSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    news: PropTypes.arrayOf(NewsItemProps).isRequired,
  }),
};

export default NewsListSection;
