import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import BenefitItem, { BenefitItemProps } from "../items/BenefitItem";

// import Swiper styles
const BenefitSection = ({ data }) => {
  const { title, description, buttonLink, buttonTitle, benefits } = data;

  return (
    <section id="benefits">
      <div className="container">
        <div className="space-y-6 md:space-y-10">
          <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
            <h4>{title}</h4>
            {description && <p>{description}</p>}
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="custom-swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1248: {
                slidesPerView: 4,
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <BenefitItem item={benefit} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full justify-center flex">
            <a href={buttonLink} target="_blank" rel="noreferrer" className="btn">
              {buttonTitle || "Đăng ký"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

BenefitSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string,
    buttonLink: PropTypes.string,
    benefits: PropTypes.arrayOf(BenefitItemProps).isRequired,
  }),
};

export default BenefitSection;
