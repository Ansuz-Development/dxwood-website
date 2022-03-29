import React from "react";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("./AboutSection"));
const BenefitSection = dynamic(() => import("./BenefitSection"));
const CompanySection = dynamic(() => import("./CompanySection"));
const EventSection = dynamic(() => import("./EventSection"));
const MentorSection = dynamic(() => import("./MentorSection"));
const SubjectSection = dynamic(() => import("./SubjectSection"));


const aboutSectionData = {
  title: "Về dự án",
  description:"Vivamus eleifend lorem id lacus varius egestas. Nam nec ipsum vitae dui maximus rhoncus et at justo. Mauris id tellus arcu. Donec efficitur sem sollicitudin imperdiet consectetur. Sed hendrerit rhoncus augue.",
  image:"https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
}

const mentorSectionData = {
  title : "Danh sách mentor",
  mentors: [
    {
      avatar: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
      name:"Phạm Thanh Sơn",
      title:"bod fpt is",
      description:"Habitasse cursus id ullamcorper amet. Tincidunt mi vulputate ut imperdiet elit justo. Blandit pretium vitae hendrerit tincidunt turpisvultricies. Dolor id pretium, vitae dictum curabitur vulputate id. Morbi nunc diam, suspendisse ut ultrices erat. Tristique pretium, rutrum ullamcorper ac feugiat id suspendisse feugiat vitae. Mauris, facilisis suspendisse ultricies morbi risus commodo mi.",

    }
  ]
}

const renderSection = (section, data) => {
  switch (section.__typename) {
    case "ComponentSectionsAboutSection":
      return <AboutSection data={aboutSectionData} />;
    case "ComponentSectionsBenefitSection":
      return <BenefitSection data={section} />;
    case "ComponentSectionsCompanySection":
      return <CompanySection data={section} />;
    case "ComponentSectionsEventSection":
      const sectionData = {
        ...section,
        posts: data.posts,
      };
      return <EventSection data={sectionData} />;
    case "ComponentSectionsMentorSection":
      return <MentorSection data={mentorSectionData} />;
    case "ComponentSectionsSubjectSection":
      return <SubjectSection data={section} />;
    default:
      return null;
  }
};

export default renderSection;
