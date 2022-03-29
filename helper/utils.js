export const getImageLinkWithFormat = (obj, type) => {
  return obj.cover.data.attributes.formats[`${type}`].url;
};

export const getImageUrl = (obj) => {
  return obj.data?.attributes.url;
};
