export const getImageUrl = (obj) => {
  return obj.data?.attributes.url;
};

export const getFormattedImage = (obj, type) => {
  return obj.data?.attributes?.formats[`${type}`]?.url;
};
