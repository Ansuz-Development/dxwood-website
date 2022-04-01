import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import MentorItem from "../items/MentorItem";

const MentorSection = ({ data }) => {
  const { title, mentors } = data;

  return (
    <section id="mentors">
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
        </div>

        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={24}
          navigation={true}
          modules={[Grid, Navigation]}
          className="custom-swiper"
        >
          {mentors.map((mentor) => (
            <SwiperSlide key={mentor.title}>
              <MentorItem item={mentor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

MentorSection.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      mentors: PropTypes.array.isRequired,
    }),
  ),
};

export default MentorSection;
