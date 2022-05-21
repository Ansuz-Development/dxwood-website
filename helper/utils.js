export const getImageUrl = (obj, withDomain = true) => {
  const url = obj.data?.attributes?.url;

  if (!url) return null;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}` : url;
};

export const getFormattedImage = (obj, type, withDomain = true) => {
  const url = obj.data?.attributes?.formats[`${type}`]?.url;

  if (!url) return null;

  return withDomain ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}` : url;
};

export const fixContent = (content) => {
  return content.replaceAll(
    'src="/uploads',
    `src="${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads`,
  );
};

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dfdfdf" offset="20%" />
      <stop stop-color="#c5c5c5" offset="50%" />
      <stop stop-color="#dfdfdf" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e9eaea" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const shimmerBlur = (w, h) => `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
