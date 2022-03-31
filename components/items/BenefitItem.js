import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getImageUrl } from "../../helper/utils";

const BenefitItem = ({ item }) => {
  const iconUrl = getImageUrl(item.icon);

  return (
    <div className="flex flex-col justify-center text-center p-6 space-y-4">
      <Image src={iconUrl} width={40} height={40} alt={item.title} />
      <h5>{item.title}</h5>
      <p className="body-2">{item.description}</p>
    </div>
  );
};

BenefitItem.propTypes = {
  item: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

export default BenefitItem;
