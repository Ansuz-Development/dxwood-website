export const getImageUrl = (obj, withDomain = true) => {
  const url = obj.data?.attributes.url;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}` : url;
};

export const getFormattedImage = (obj, type, withDomain = true) => {
  const url = obj.data?.attributes?.formats[`${type}`]?.url;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}` : url;
};
