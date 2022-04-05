import { getFooter } from "../../lib/api";

export default async function handler(req, res) {
  const footer = await getFooter();

  res.json(footer);
}
