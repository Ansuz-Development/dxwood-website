export const getImageUrl = (obj, withDomain = true) => {
  const url = obj.data?.attributes?.url;

  if (!url) return null;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}` : url;
};

export const getFormattedImage = (obj, type, withDomain = true) => {
  const url = obj.data?.attributes?.formats[`${type}`]?.url;

  if (!url) return null;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}` : url;
};

export const fixContent = (content) => {
  return content.replace('src="/uploads', `src="${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads`);
};
