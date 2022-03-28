import React from "react";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("./AboutSection"));
const BenefitSection = dynamic(() => import("./BenefitSection"));
const CompanySection = dynamic(() => import("./CompanySection"));
const EventSection = dynamic(() => import("./EventSection"));
const MentorSection = dynamic(() => import("./MentorSection"));
const SubjectSection = dynamic(() => import("./SubjectSection"));

const renderSection = (section, data) => {
  switch (section.__typename) {
    case "ComponentSectionsAboutSection":
      return <AboutSection data={section} />;
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
      return <MentorSection data={section} />;
    case "ComponentSectionsSubjectSection":
      return <SubjectSection data={section} />;
    default:
      return null;
  }
};

export default renderSection;
