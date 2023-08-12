import type { APIRoute } from 'astro';

import PEOPLEDATA from "../../../content/people.json";

export const get: APIRoute = async () => {
  return ({
    body: JSON.stringify(PEOPLEDATA)
  });
}
