import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import CompanyItem, { CompanyItemProps } from "../items/CompanyItem";
import useMobileDetect from "../../helper/useMobileDetect";

const CompanySection = ({ data }) => {
  const { title, description, companies } = data;
  const { isMobile } = useMobileDetect();

  return (
    <section id="companies">
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
        <Swiper
          slidesPerView={isMobile() ? 1 : 4}
          spaceBetween={24}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="custom-swiper"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
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
