import React from "react";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import SubjectItem from "../items/SubjectItem";

const SubjectSection = ({ data }) => {
  const { title, description, subjects } = data;

  return (
    <section id="subjects">
      <div className="space-y-6 md:space-y-10">
        <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={"custom-swiper"}
        >
          {subjects.map((subject) => (
            <SwiperSlide key={subject.title}>
              <SubjectItem item={subject} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

SubjectSection.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    subjects: PropTypes.array,
    title: PropTypes.string,
  }),
};

export default SubjectSection;
