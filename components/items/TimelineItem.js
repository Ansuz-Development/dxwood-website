import React from "react";
import PropTypes from "prop-types";

const TimelineItem = ({ steps }) => {
  return (
    <ol className="custome-timeline">
      <div className="line" />
      <div className="space-y-4">
        {steps.map((step) => {
          return (
            <li key={step.label} className="timeline-item">
              <div className="bullet" />
              <div className="content">
                <time className="text-sm font-semibold">{step.label}</time>
                <p className="text-sm">{step.title}</p>
              </div>
            </li>
          );
        })}
      </div>
    </ol>
  );
};

TimelineItem.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default TimelineItem;
