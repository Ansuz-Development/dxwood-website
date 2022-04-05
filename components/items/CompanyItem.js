import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getImageUrl, shimmerBlur } from "../../helper/utils";

const CompanyItem = ({ item }) => {
  const logoUrl = getImageUrl(item.logo);

  return (
    <div className="flex justify-center px-9 py-6">
      <Image
        src={logoUrl}
        width={222}
        height={148}
        alt={item.name}
        objectFit="contain"
        placeholder="blur"
        blurDataURL={shimmerBlur(222, 148)}
        loading="lazy"
      />
    </div>
  );
};

export const CompanyItemProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  homepage: PropTypes.string,
  logo: PropTypes.object.isRequired,
});

CompanyItem.propTypes = {
  item: CompanyItemProps.isRequired,
};

export default CompanyItem;
