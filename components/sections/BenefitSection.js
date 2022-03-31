import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import BenefitItem, { BenefitItemProps } from "../items/BenefitItem";

// import Swiper styles
const BenefitSection = ({ data }) => {
  const { title, description, benefits } = data;
  return (
    <section id="benefits">
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="custom-swiper"
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.title}>
              <BenefitItem item={benefit} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

BenefitSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(BenefitItemProps).isRequired,
  }),
};

export default BenefitSection;
