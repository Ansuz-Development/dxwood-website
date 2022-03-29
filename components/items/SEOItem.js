import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";
// https://heymeta.com/

import { getImageLink, SocialNetworks } from "../../helper/constants";
const SEOItem = ({ seo }) => {
  if (!seo) return null;

  const fbMetaData = seo?.metaSocial.find((e) => e.socialNetwork === SocialNetworks.facebook);
  const twMetaData = seo?.metaSocial.find((e) => e.socialNetwork === SocialNetworks.twitter);

  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo?.description} />
      <meta property="keywords" content={seo.keywords} />

      {/* Google / Search Engine Tags  */}
      <meta itemProp="name" content={seo.metaTitle} />
      <meta itemProp="description" content={seo?.description} />
      <meta itemProp="image" content={getImageLink(seo.metaImage.data?.attributes.url)} />

      {/* Facebook Meta Tags */}
      {fbMetaData && (
        <>
          <meta property="og:title" content={fbMetaData?.title} />
          <meta property="og:description" content={fbMetaData?.description} />
          <meta property="og:image" content={getImageLink(fbMetaData.image.data?.attributes.url)} />
        </>
      )}

      {/* Twitter Meta Tags */}
      {twMetaData && (
        <>
          <meta name="twitter:title" content={twMetaData?.title} />
          <meta name="twitter:description" content={twMetaData?.description} />
          <meta
            name="twitter:image"
            content={getImageLink(twMetaData.image.data?.attributes.url)}
          />
        </>
      )}
    </Head>
  );
};

SEOItem.defaultProps = {
  seo: {
    description: "",
    keywords: "",
    metaTitle: "",
    metaImage: {
      data: {
        attributes: {
          url: "",
        },
      },
    },
  },
};

SEOItem.propTypes = {
  seo: PropTypes.shape({
    description: PropTypes.string,
    keywords: PropTypes.string,
    metaImage: PropTypes.shape({
      data: PropTypes.shape({
        attributes: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
    metaTitle: PropTypes.string,
  }),
};

export default SEOItem;
