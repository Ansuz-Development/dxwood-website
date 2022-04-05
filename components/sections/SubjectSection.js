import React from "react";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import SubjectItem from "../items/SubjectItem";
import { getImageUrl } from "../../helper/utils";

const SubjectSection = ({ data }) => {
  const { title, description, subjects, downloadButtonTitle, contentFile } = data;

  const contentFileUrl = getImageUrl(contentFile);

  return (
    <section id="subjects">
      <div className="container">
        <div className="space-y-6 md:space-y-10">
          <div className="text-center w-full md:max-w-2/3 space-y-4 mx-auto">
            <h4>{title}</h4>
            {description && <p>{description}</p>}
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={24}
            modules={[Pagination, Navigation]}
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

          {contentFileUrl && (
            <div className="w-full justify-center flex">
              <a
                href={contentFileUrl}
                target="_blank"
                rel="noreferrer"
                className="btn"
                type="button"
              >
                {downloadButtonTitle || "Tải nội dung đào tạo"}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

SubjectSection.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    subjects: PropTypes.array,
    title: PropTypes.string,
    downloadButtonTitle: PropTypes.string,
    contentFile: PropTypes.object,
  }),
};

export default SubjectSection;
