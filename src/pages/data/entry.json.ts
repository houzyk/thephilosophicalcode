import type { APIRoute } from 'astro';

import { SITE_URL } from "../../config";

export const get: APIRoute = async () => {
  return ({
    body: JSON.stringify({
      routes: {
        people: `${SITE_URL}/data/people.json`,
        articles: `${SITE_URL}/data/articles.json`
      }
    })
  });
}
