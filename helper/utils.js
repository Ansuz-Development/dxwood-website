export const getImageLinkWithFormat = (obj, type) => {
  return obj.cover.data.attributes.formats[`${type}`].url;
};

export const getImageUrl = (obj) => {
  return obj.data?.attributes.url;
};

export const getFormatedImage = (obj, type) => {
  return obj.data?.attributes?.formats[`${type}`]?.url;
};
