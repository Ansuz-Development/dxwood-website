const getToken = (req) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  }

  if (req.signedCookies && req.signedCookies.token) {
    return req.signedCookies.token;
  }

  if (req.query && req.query.token) {
    return req.query.token;
  }

  return null;
};

export default async function handler(req, res) {
  const token = getToken(req);
  // Check for secret to confirm this is a valid request
  if (token !== process.env.SECRET_HOOK_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const hook = req.body;

    switch (hook.event) {
      case "entry.update":
      case "entry.delete":
      case "entry.unpublish":
        await Promise.all([
          res.unstable_revalidate("/"),
          async () => {
            if (hook.model === "post") {
              await res.unstable_revalidate(`/post/${hook.entry.slug}`);
            }
          },
        ]);
        break;
      default:
        break;
    }

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
