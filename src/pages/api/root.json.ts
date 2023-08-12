import type { APIRoute } from 'astro';

import { SITE_URL } from "../../config";

export const get: APIRoute = async () => {
  return ({
    body: JSON.stringify({
      routes: {
        ".": `${SITE_URL}/api/root.json`,
        people: `${SITE_URL}/api/people.json`,
        articles: `${SITE_URL}/api/articles.json`
      }
    })
  });
}
