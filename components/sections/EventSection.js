import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import NewsItem from "../items/news/NewsItem";
import useMobileDetect from "../../helper/useMobileDetect";

const EventSection = ({ data }) => {
  const { title, description, posts } = data;

  const { isMobile } = useMobileDetect();

  return (
    <section id="news">
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
        <Swiper
          slidesPerView={isMobile() ? 1 : 3}
          spaceBetween={24}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="custom-swiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <NewsItem item={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

EventSection.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    posts: PropTypes.array,
    title: PropTypes.string,
  }),
};

export default EventSection;
