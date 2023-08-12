import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  return ({
    body: JSON.stringify({})
  });
}
