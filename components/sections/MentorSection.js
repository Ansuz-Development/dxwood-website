import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper";
import MentorItem from "../items/MentorItem";

const MentorSection = ({ data }) => {
  const { title, description, mentors } = data;

  return (
    <section id="mentors" className="bg-surface">
      <div className="container">
        <div className="space-y-6 md:space-y-10">
          <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
            <h4>{title}</h4>
            {description && <p>{description}</p>}
          </div>

          <Swiper
            slidesPerView={1}
            grid={{
              rows: 1,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            navigation={true}
            modules={[Grid, Pagination, Navigation]}
            className="custom-swiper"
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.title}>
                <MentorItem item={mentor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

MentorSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mentors: PropTypes.array.isRequired,
  }),
};

export default MentorSection;
