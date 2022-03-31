import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import CompanyItem, { CompanyItemProps } from "../items/CompanyItem";

const CompanySection = ({ data }) => {
  const { title, description, companies } = data;

  return (
    <section>
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="custom-swiper"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.name}>
              <CompanyItem item={company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

CompanySection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    companies: PropTypes.arrayOf(CompanyItemProps).isRequired,
  }),
};

export default CompanySection;
