import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper";
import MentorItem from "../items/MentorItem";

import useMobileDetect from "../../helper/useMobileDetect";

const MentorSection = ({ data }) => {
  const { title, description, mentors } = data;

  const { isMobile } = useMobileDetect();

  return (
    <section id="mentors" className="bg-surface">
      <div className="container">
        <div className="space-y-6 md:space-y-10">
          <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
            <h4>{title}</h4>
            {description && <p>{description}</p>}
          </div>

          <Swiper
            slidesPerView={isMobile() ? 1 : 2}
            grid={{
              rows: isMobile() ? 1 : 2,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            navigation={true}
            modules={[Grid, Pagination, Navigation]}
            className="custom-swiper"
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
