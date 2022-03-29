import PropTypes from "prop-types";
import React, { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import SubjectItem from "../items/SubjectItem";

const SubjectSection = ({ data }) => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div className="subject-section">
      <p className="font-34 font-bold mb-6 text-center">{data.title}</p>
      <p className="text-center mb-4">{data.description}</p>
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        className="flex overflow-x-auto scrollbar-hide ml-0 md:ml-20"
      >
        {data.subjects.map((subject) => (
          <SubjectItem key={subject.heading} item={subject} />
        ))}
      </div>
    </div>
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
